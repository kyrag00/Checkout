const initStripe = require("../stripe")

const createCheckoutSession = async (req, res) => {

    const cart = req.body

    const stripe = initStripe()

    const session = await stripe.checkout.sessions.create({
        mode: "payment",
        line_items: cart.map(item => {
            return {
                price: item.product,
                quantity: item.quantity
            }
        }),
        success_url: "http://localhost:5175/confirmation",
        cancel_url: "http://localhost:5175",
    })

    res.status(200).json({url: session.url})
}

const verifySession = async(req, res) => {
    const stripe = initStripe()
    const sessionId = req.body.sessionId

    const session = await stripe.checkout.session.retrieve(sessionId)
    console.log(session)
}

const listAllProducts = async (req, res) => {
    const stripe = initStripe()

    try {
    const products = await stripe.products.list({
        limit: 3,
        expand: ["data.default_price"]
    })
    res.status(200).json(products)
    } catch (error) {
        console.log(error)
        res.status(400).json(error)
    }
}

module.exports = {createCheckoutSession, listAllProducts, verifySession}