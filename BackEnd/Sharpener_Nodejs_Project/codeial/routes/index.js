const express = require("express");
const router = express.Router();

const homeController = require("../controller/homeController");

router.get("/", homeController.Home);
router.post("/book-slot/:id", homeController.BookingData);
router.post('/book-user',homeController.BookUser)

module.exports = router;
