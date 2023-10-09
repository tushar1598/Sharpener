const express = require("express");
const router = express.Router();

const expenseController = require("../controller/expenseController");

router.get("/", expenseController.ExpenseEJS);
router.post("/expense-create", expenseController.CrudCrud);
router.get("/Delete-expense/:id", expenseController.Delete);
router.get("/update/:id", expenseController.Update);
router.post("/updated-data/:id", expenseController.UpdatedData);

module.exports = router;
