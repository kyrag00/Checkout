import { useEffect, useState } from "react"
import Login from "../Login"
import Logout from "../Logout"
import Register from "../Register"
import Products from "./Products"
import HomeImage from"../images/Home.png"
import "../styles/home.css"
import AboutImg from "../images/About.png"

const Home = () => {
    const [user, setUser] = useState<string>("")

    useEffect(() => {
        const authorize = async() => {
          const response = await fetch("http://localhost:3000/api/auth/authorize", {
        credentials: "include"
      })
    
      const data = await response.json()
      if (response.status === 200) {
        setUser(data)
      } else {
        setUser("")
      }
        }
        authorize()
      }, [])

    
    return (
        <>
        {/* <img src={HomeImage} alt="" />
        {!user ? <Login setUser={setUser} /> : <Logout setUser={setUser} /> }
        <br />
        {!user && <Register />} */}
       <div className="banner-container">
                <img src={HomeImage} alt="Banner" className="banner-img" />
                <div className="button-container">
                    {!user ? <Login setUser={setUser} /> : <Logout setUser={setUser} />}
                    {!user && <Register />}
                </div>
                </div>

                <div className="about">
                <img src={AboutImg} alt="About us" />
                </div>
        <Products/>
        </>
    )
    }

export default Home