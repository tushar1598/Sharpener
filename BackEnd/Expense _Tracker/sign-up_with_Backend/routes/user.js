const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");

router.get("/sign-up", userController.Sign_up);
router.post("/create-user", userController.CreateUser);

module.exports = router;
