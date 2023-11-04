const Expense = require("../models/expense");
const User = require("../models/user");


module.exports.CreateExpense = async function (req, res) {
  const { amount, description, category } = req.body;
  let expense = await Expense.create({
    amount,
    description,
    category,
    userId: req.user.dataValues.id,
  });
  return res.status(200).json({
    message: "expenses created!!",
    expense: expense,
  });
};

module.exports.TotalExpense = async function (req, res) {
  let expense = await Expense.findAll({
    where: { userId: req.user.dataValues.id },
  });

  let totalAmount = 0;
  for (let i of expense) {
    totalAmount += Number(i.dataValues.amount);
  }

  User.update(
    { totalexpense: totalAmount },
    { where: { id: req.user.dataValues.id } }
  );

  return res.status(200).json({
    message: "Total expense",
    expense: expense,
  });
};

module.exports.DeleteExpense = async function (req, res) {
  let expenseId = req.params.id;
  await Expense.destroy({ where: { id: expenseId } });
  return res.redirect("back");
};
