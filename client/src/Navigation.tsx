import { NavLink } from "react-router-dom"

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
        </ul>
        </nav>
        </>
    )
}

export default Navigation