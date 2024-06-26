# Stripe Checkout - Blooming

## Description
This project is a webshop where users can place orders and make payments using Stripe integration. Users can register and log in (and out). User data is stored in a JSON file on the server, including email and encrypted passwords. Login is managed using cookies. All products are managed through Stripe. Payment validation is implemented, and upon successful validation, the order is saved in a JSON file on the server. 

## Make sure to
- Have node.js installed
- Set up your test account on Stripe and create your products
- Save your API key and create an .env file in the server folder with the following structure:
STRIPE-KEY=insert_your_key

## To run the project
- Clone the repository from GitHub.
- Open terminal for client: cd client, then npm install, and then npm run dev
- Open terminal for server: cd server, then npm install, and then npx nodemon server
- Navigate to http://localhost:5175/ in your browser to use the app