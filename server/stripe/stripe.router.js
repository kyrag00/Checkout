const express = require("express")
const { createCheckoutSession, listAllProducts } = require("./stripe.controller")
const router = express.Router()

router.post("/create-checkout-session", createCheckoutSession)
router.get("/products", listAllProducts)

module.exports = router