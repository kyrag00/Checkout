const express = require("express")
const { createCheckoutSession, listAllProducts, verifySession } = require("./stripe.controller")
const router = express.Router()

router.post("/create-checkout-session", createCheckoutSession)
router.get("/products", listAllProducts)
router.post("/verify-session", verifySession)

module.exports = router