import { NavLink } from "react-router-dom"
import "./styles/nav.css"
import Cart from "./Cart"
import { useEffect, useState } from "react"
import Login from "./Login"
import Logout from "./Logout"
import Register from "./Register"

const Navigation = () => {

    // const [user, setUser] = useState<string>("")

    // useEffect(() => {
    //     const authorize = async() => {
    //       const response = await fetch("http://localhost:3000/api/auth/authorize", {
    //     credentials: "include"
    //   })
    
    //   const data = await response.json()
    //   if (response.status === 200) {
    //     setUser(data)
    //   } else {
    //     setUser("")
    //   }
    //     }
    //     authorize()
    //   }, [])
      
    return  (
        <>
        <nav className="navigation">

        <ul>
            {/* <li>
            {!user ? <Login setUser={setUser} /> : <Logout setUser={setUser} /> }
        <br />
        {!user && <Register />} */}
            {/* </li> */}
            {/* <li>
                <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
                <NavLink to={"/products"}>Products</NavLink>
            </li> */}
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