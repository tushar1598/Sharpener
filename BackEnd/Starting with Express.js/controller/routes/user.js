const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");

router.get("/profile", userController.Profile);

module.exports = router;
