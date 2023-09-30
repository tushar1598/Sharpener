const express = require("express");
const router = express.Router();
const homeController = require("../controller/homeController");

router.get("/", homeController.Home);
router.get("/profile", homeController.Profile);
router.use(homeController.Error);

module.exports = router;
