import { useCart } from "./context/CartContext"

const Payment = () => {
    const {cart} = useCart()

    const handlePayment = async() => {
        const response = await fetch("http://localhost:3000/payments/create-checkout-session",{
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(cart),
          credentials: "include"
        })

        const data = await response.json()
        localStorage.setItem("sessionId", JSON.stringify(data.sessionId))
        window.location = data.url
      }


      return (
    <div>
      <button onClick={handlePayment}>Checkout</button>
    </div>
      )
}

export default Payment