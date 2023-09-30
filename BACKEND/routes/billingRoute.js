const express = require("express");
const { createCheckoutSession } = require("../controller/billingCtrl");
const router = express.Router();

router.post("/create-checkout-session", createCheckoutSession);

module.exports = router;