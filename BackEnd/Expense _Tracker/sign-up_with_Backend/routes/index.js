const express = require("express");
const router = express.Router();
const homeController = require("../controller/homeController");

router.get("/", homeController.Home);
router.use("/users", require("./user"));
router.use("/api",require("./api"))

module.exports = router;
