import { NavLink } from "react-router-dom"
import "./styles/nav.css"

const Navigation = () => {
      
    return  (
        <>
        <nav className="navigation">

        <ul>
            <li>
                <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
                <NavLink to={"/cart"}>My Cart</NavLink>
            </li>
        </ul>
        {/* <Cart/> */}
        </nav>
        </>
    )
}

export default Navigation