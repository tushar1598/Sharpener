const Contact = require("../models/contact");

module.exports.Contact = function(req,res){
    Contact.find({},function(err,contact){
        return res.render("user_profile",{
            title : "Profile Page",
            phone:contact
        })
    })
}


module.exports.Create = function (req, res) {
  Contact.create(
    {
      name: req.body.name,
      phone: req.body.phone,
    },
    function (err, contact) {
      if (err) {
        console.log(err);
        return;
      }
      return res.redirect("back");
    }
  );
};

module.exports.Destroy = function (req, res) {
  let id = req.query.id;
  Contact.findByIdAndDelete(id, function (err, contact) {
    if (err) {
      console.log("error in deleting contact");
    }
    return res.redirect("back");
  });
};
