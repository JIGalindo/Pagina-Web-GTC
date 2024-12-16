const express = require("express");
const { loginUser, logoutUser } = require("../Controller/auth.controller");
const router = express.Router();

router.post("/", loginUser);
router.post("/logout", logoutUser);
module.exports = router;
 