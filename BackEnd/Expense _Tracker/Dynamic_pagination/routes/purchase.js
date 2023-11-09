const express = require("express");
const router = express.Router();
const purchaseController = require("../controller/purchaseController");

router.post("/purchase-premium", purchaseController.CreateOrder);
router.get("/premium", purchaseController.Premium);
router.get("/all-order",purchaseController.PremiumUser);

module.exports = router;
