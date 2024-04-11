const initStripe = require("../stripe")
const fs = require("fs").promises

const createCheckoutSession = async (req, res) => {

    const cart = req.body

    const stripe = initStripe()

    // const userEmail = req.session.user.email;
    const user = req.session.user

    const session = await stripe.checkout.sessions.create({
        mode: "payment",
        customer: user.stripeId,
        line_items: cart.map(item => {
            return {
                price: item.product.default_price.id,
                quantity: item.quantity
            }
        }),
        success_url: "http://localhost:5175/confirmation",
        cancel_url: "http://localhost:5175",
        // customer_email: userEmail,
    })

    res.status(200).json({url: session.url, sessionId: session.id})
}

const verifySession = async(req, res) => {
    const stripe = initStripe()
    const sessionId = req.body.sessionId

    const session = await stripe.checkout.sessions.retrieve(sessionId)
    console.log(session)

    if (session.payment_status === "paid") {
    const lineItems = await stripe.checkout.sessions.listLineItems(sessionId)

    const order = {
        orderNumber: Math.floor(Math.random() * 1000000),
        customerName: session.customer_details.name,
        products: lineItems.data.map((item) => ({
            description: item.description,
            quantity: item.quantity,
        })),
        total: (session.amount_total / 100),
        date: new Date(),
    }

    const orders = JSON.parse(await fs.readFile("./orders.json"))
    orders.push(order)
    await fs.writeFile("./orders.json", JSON.stringify(orders, null, 4))

    res.status(200).json({verified: true})
}
}

module.exports = {createCheckoutSession, verifySession}