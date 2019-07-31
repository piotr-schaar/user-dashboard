const express = require("express");
const { user } = require("../controllers");

const router = express.Router();

router.post("/user/login", user.userLogin);
router.post("/user/logout", user.userLogout);
router.post("/user/register", user.userRegister);

module.exports = router;
