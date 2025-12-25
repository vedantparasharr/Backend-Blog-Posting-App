const express = require("express");
const { routes } = require("../src/app");
const router = express.Router();

const { createUser } = require("../controllers/auth.controller");

router.get("/createUser", createUser);

module.exports = router;
