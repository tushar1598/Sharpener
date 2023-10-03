const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");

router.get("/profile", userController.Contact);
router.post("/create-contact", userController.Create);
router.get("/remove/", userController.Destroy);

module.exports = router;
