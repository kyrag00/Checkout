const express = require("express")
const cors = require("cors")
require("dotenv").config()

const stripeRouter = require("./stripe/stripe.router")

const app = express()

app.use(cors({
    origin: "http://localhost:5175",
    credentials: true
}))

app.use(express.json())

app.use("/payments", stripeRouter)


app.listen(3000, () => console.log("Server is up and running...💃"))