const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");

router.get("/sign-up", userController.Sign_up);
router.get("/sign-in", userController.Sign_in);
router.get("/profile",userController.Profile)
router.post("/create-user", userController.CreateUser);
router.post("/create-session",userController.CreateSession);
router.post("/create-expense",userController.CreateExpense);
router.get("/delete-expense/:id",userController.DeleteExpense)

module.exports = router;
