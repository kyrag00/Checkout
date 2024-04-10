import Payment from "./Payment"
import { useCart } from "./context/CartContext"

const Cart = () => {

const {cart} = useCart()
    return (
        <>
        <div>
            <h4>My Shopping Cart</h4>
            {cart.map((item, index) => (
                <div key={index}>
                    <h5>{item.product.name}</h5>
                    <p>Price: {item.product.default_price.unit_amount / 100} SEK</p>
                    <p>Quantity: {item.quantity}</p>
                </div>
            ))}
            <Payment/>
        </div>
        </>
    )
}

export default Cart