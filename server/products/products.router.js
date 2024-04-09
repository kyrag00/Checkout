const express = require("express")
const { listAllProducts } = require("./products.controller")
const router = express.Router()

router.get("/", listAllProducts)

module.exports = router