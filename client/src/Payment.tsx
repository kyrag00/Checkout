const Payment = () => {

    const handlePayment = async() => {
        const response = await fetch("http://localhost:3000/payments/create-checkout-session",{
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify([
            {
            product: "price_1P2BhuBeGQffwmje4lnnlBPg",
            quantity: 2
          },
        {
            product: "price_1P2AWJBeGQffwmjeWd9BpxC3",
            quantity: 1
        }
        ])
        })
        const data = await response.json()
        window.location = data.url
      }


      return (
    <div>
      <button onClick={handlePayment}>Ge mig pengar!!!</button>
    </div>
      )
}

export default Payment