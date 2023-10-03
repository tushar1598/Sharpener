const express = require("express");
const router = express.Router();
const homeController = require("../controller/homeController");

router.get("/", homeController.Home);

router.use("/user", require("./user"));
router.get("/Destroy/:id", homeController.Destroy);

console.log("router loaded!!");
module.exports = router;
