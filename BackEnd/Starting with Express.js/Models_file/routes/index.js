
const express = require("express");
const router = express.Router();

const homeController = require("../controller/homeController");


router.get('/',homeController.create);
router.use('/user',require('./user'));







module.exports = router;