const mongoose = require('mongoose');
const passport = require('passport');
require('../models/User');
const bcrypt = require('bcryptjs');

const User = mongoose.model('users');

const user = {
  userLogin: (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
      if (err) {
        return next(err);
      }
      if (!user) {
        return res.sendStatus(403);
      }

      req.logIn(user, () => {
        if (err) {
          return next(err);
        }
        return res.send(user);
      });
    })(req, res, next);
  },
  userLogout: (req, res) => {
    req.logout();
    res.sendStatus(200);
  },
  userRegister: (req, res) => {
    const { username, password } = req.body;
    let errors = [];
    if (!username || !password) {
      errors.push({
        msg: 'Please fill in all fields',
      });
    }
    if (password.length < 6) {
      errors.push({
        msg: 'Password is too short(atleast 6 charactes)',
      });
    }
    User.findOne({ username }).then(userN => {
      if (userN) {
        errors.push({
          msg: 'Email is already registered',
        });
      } else {
        const newUser = new User({
          username,
          password,
        });

        bcrypt.genSalt(10, (err, salt) =>
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;

            newUser.password = hash;
            newUser
              .save()
              .then(user => {
                passport.authenticate('local')(req, res, () => {
                  res.sendStatus(201);
                });
              })
              .catch(error => console.log(error));
          }),
        );
      }
    });
    // User.register(
    //   new User({ username: req.body.username, password: req.body.password }),
    //   req.body.password,
    //   (err, user) => {
    //     if (err) {
    //       return res.sendStatus(500);
    //     } else {
    // passport.authenticate('local')(req, res, () => {
    //   res.sendStatus(201);
    // });
    //     }
    //   },
    // );
  },
};

module.exports = user;
