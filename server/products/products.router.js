const express = require("express")
const { listAllProducts } = require("./products.controller")
const router = express.Router

router.get("/products", listAllProducts)

module.exports = router