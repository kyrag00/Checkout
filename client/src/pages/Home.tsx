import { useEffect, useState } from "react"
import Login from "../Login"
import Logout from "../Logout"
import Register from "../Register"

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
        <h1>Blooming</h1>
        <h3>Welcome to Blooming!🌸 </h3>
        {!user ? <Login setUser={setUser} /> : <Logout setUser={setUser} /> }
        {!user && <Register />}
        </>
    )
    }

export default Home