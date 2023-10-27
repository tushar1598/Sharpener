const express = require("express");
const router = express.Router();
const userController = require("../../../controller/api/v1/userController");

router.get("/", userController.Create);

module.exports = router;
