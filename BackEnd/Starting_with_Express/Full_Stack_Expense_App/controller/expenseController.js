const Expense = require("../models/expenseTable");
const axios = require("axios");
const url =
  "https://crudcrud.com/api/33b04969f3574b00afb562364efeac75/expense_table";

module.exports.ExpenseEJS = function (req, res) {
  axios.get(url).then((result) => {
    return res.render("expense", {
      title: "Expense App",
      Data: result.data,
    });
  });
};

// module.exports.CreateExpense = async function (req, res) {
//   try {
//     await Expense.create({
//       Amount: req.body.Amount,
//       Category: req.body.Category,
//       Description: req.body.Description,
//     });
//     return res.redirect("back");
//   } catch (err) {
//     return res.status(401).send("<h1>Something went wrong!!</h1>");
//   }
// };

module.exports.CrudCrud = function (req, res) {
  const obj = {
    Amount: req.body.Amount,
    Category: req.body.Category,
    Description: req.body.Description,
  };
  axios
    .post(url, obj)
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
  return res.redirect("/");
};

module.exports.Delete = function (req, res) {
  let id = req.params.id;
  axios
    .delete(`${url}/${id}`)
    .then((res) => console.log("Deleted Successfully!!"))
    .catch((err) => console.log(err));
  return res.redirect("/");
};

module.exports.Update = function (req, res) {
  let id = req.params.id;
  axios.get(url).then((result) => {
    return res.render("expenseUpdate", {
      title: "Update Expense Data",
      Data: result.data.filter((elem, index) => id === elem._id),
    });
  });
};

module.exports.UpdatedData = function (req, res) {
  const id = req.params.id;
  axios
    .put(`${url}/${id}`, {
      Amount: req.body.Amount,
      Category: req.body.Category,
      Description: req.body.Description,
    })
    .then((res) => console.log("updated successfully!!"))
    .catch((err) => console.log(err));
  return res.redirect("/");
};
