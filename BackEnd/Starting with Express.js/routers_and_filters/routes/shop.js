const express = require("express");
const router = express.Router();
const shopController = require("../controller/shopController");

router.get("/shoping", shopController.Shop);

module.exports = router;
