const Stripe = require("stripe")
require('dotenv').config();

const initStripe = () => {
    const apiKey = process.env.STRIPE_KEY
    if(!apiKey) {
        throw new Error("No Stripe API key found");
    }
    return new Stripe(apiKey, {
        apiVersion: "2023-10-16"
    })
}

module.exports = initStripe