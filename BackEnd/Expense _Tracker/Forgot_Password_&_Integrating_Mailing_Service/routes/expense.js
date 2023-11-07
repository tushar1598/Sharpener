const express = require("express");
const router = express.Router();
const expenseController = require("../controller/expenseController");

router.post("/create-expense", expenseController.CreateExpense);
router.get("/total-expense",expenseController.TotalExpense)
router.get("/delete-expense/:id",expenseController.DeleteExpense)

module.exports = router;
