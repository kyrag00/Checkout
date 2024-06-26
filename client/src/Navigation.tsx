import { NavLink } from "react-router-dom"
import "./styles/nav.css"

const Navigation = () => {

    // const [user, setUser] = useState<string>("");
      
    return  (
        <>
        <div>
        <nav className="navigation">

        <ul>
            <li>
                <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
                <NavLink to={"/products"}>Products</NavLink>
            </li>
            <li>
                <NavLink to={"/cart"}>My Cart</NavLink>
            </li>
           
            {/* {!user ? (
                <>
            <li>
                <Login setUser={setUser}/>
            </li>
            <li>
                <Register/>
            </li>
            </>
            ) : (
                <li>
                    <Logout setUser={setUser} />
                </li>
            )} */}
        </ul>
        {/* <Cart/> */}
        </nav>

        {/* <img src={HomeImage} alt="" /> */}
        </div>
        </>
    )
}

export default Navigation