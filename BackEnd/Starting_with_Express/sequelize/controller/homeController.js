let database = require("../config/database");

module.exports.Home = function (req, res) {
  let query = "SELECT * FROM employes";
  database.query(query, function (err, data) {
    return res.render("home", {
      title: "Home Page",
      data: data,
    });
  });
};

module.exports.Destroy = function (req, res) {
  let id = req.params.id;
  let query = `DELETE FROM employes WHERE employee_id = ${id}`;
  database.query(query, function (err, data) {
    if (err) {
      console.log(err);
    }
    return res.redirect("back");
  });
};
