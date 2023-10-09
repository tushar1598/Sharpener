const express = require("express");
const router = express.Router();

router.use("/candidate", require("./candidates"));

module.exports = router;
