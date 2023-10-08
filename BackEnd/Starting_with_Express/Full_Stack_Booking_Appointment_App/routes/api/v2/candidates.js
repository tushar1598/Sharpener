const express = require("express");
const router = express.Router();

const candidateController = require("../../../controller/api/v2/candidateController");

router.get("/", candidateController.Candidate);

module.exports = router;
