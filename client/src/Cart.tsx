import Payment from "./Payment"
import { useCart } from "./context/CartContext"
import "./styles/products.css"

const Cart = () => {

const {cart} = useCart()
    return (
        <>
        <h1>My Shopping Cart</h1>
        <div className="prod_container">
            {cart.map((item, index) => (
                <div className="product" key={index}>
                    <h3>{item.product.name}</h3>
                        <img src={item.product.images[0]} alt={item.product.name} />
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