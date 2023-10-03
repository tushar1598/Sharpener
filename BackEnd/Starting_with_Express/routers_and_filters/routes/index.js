const express = require("express");
const router = express.Router();
const homeController = require("../controller/homeController");

router.get("/", homeController.Home);
router.use("/admin", require("./admin"));
router.use("/shop", require("./shop"));

module.exports = router;
