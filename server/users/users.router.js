const express = require("express")
const { getUsers } = require("./users.controller")
const {loggedIn} = require("../middlewares/loggedIn")
const router = express.Router()

router.get("/", loggedIn, getUsers)

module.exports = router