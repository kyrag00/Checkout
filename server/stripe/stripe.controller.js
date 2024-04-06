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

const listAllProducts = async (req, res) => {
    const stripe = initStripe()

    const products = await stripe.products.list()
    res.json(products.data)
}

module.exports = {createCheckoutSession, listAllProducts}