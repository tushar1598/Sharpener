const Appointments = require("../../../models/appointments");

module.exports.Candidate = function (req, res) {
  Appointments.findAll()
    .then((result) => {
      return res.json(200, {
        message: "Candidate created!!",
        candidate: result,
      });
    })
    .catch((err) => console.log(err));
};
