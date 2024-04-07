const initStripe = require("../stripe")

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

module.exports = {listAllProducts}