const express = require("express");
const router = express.Router();
const expenseController = require("../controller/expenseController");

router.post("/create-expense", expenseController.CreateExpense);
router.get("/total-expense",expenseController.TotalExpense)
router.get("/delete-expense/:id",expenseController.DeleteExpense)
router.get("/download-expenses",expenseController.DownloadExpenses)
router.get("/pagination-expenses",expenseController.PeginationExpenses)

module.exports = router;
