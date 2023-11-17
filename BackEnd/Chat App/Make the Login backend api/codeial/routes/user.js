const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");

router.get("/sign-in", userController.SignIn);
router.get("/sign-up", userController.SignUp);
router.get("/profile", userController.Profile);
router.post("/create", userController.Create);
router.post("/create-session", userController.CreateSession);

module.exports = router;
