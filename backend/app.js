const dotenv = require("dotenv/config");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

mongoose.connect(process.env.NODE_DATABASE, { useNewUrlParser: true });

app.listen(PORT, console.log(`Server launched on port ${PORT}`));
