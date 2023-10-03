const express = require("express");
const router = express.Router();

const adminController = require("../controller/adminController");

router.get("/admin-1", adminController.Admin);

module.exports = router;
