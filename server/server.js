const express = require("express")
const cors = require("cors")
require("dotenv").config()
const cookieSession = require("cookie-session")

const stripeRouter = require("./stripe/stripe.router")
const userRouter = require("./users/users.router")
const authRouter = require("./auth/auth.router")
const productsRouter = require("./products/products.router")

const app = express()

app.use(cors({
    origin: "http://localhost:5175",
    credentials: true
}))

app.use(express.json())
app.use(
    cookieSession({
        secret: "s3cr3tk3y",
        maxAge: 1000 * 60 * 60, // 1hour
    })
)

app.use("/payments", stripeRouter)
app.use("/api/users", userRouter)
app.use("/api/auth", authRouter)
app.use("/products", productsRouter)


app.listen(3000, () => console.log("Server is up and running...💃"))