import { NavLink } from "react-router-dom"
import "./styles/nav.css"
import Cart from "./Cart"

const Navigation = () => {
    return  (
        <>
        <nav className="navigation">

        <ul>
            <li>
                <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
                <NavLink to={"/products"}>Products</NavLink>
            </li>
            <li>
            <Cart/>
            </li>
        </ul>
        {/* <Cart/> */}
        </nav>
        </>
    )
}

export default Navigation