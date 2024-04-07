interface ILogoutProps {
    setUser: (user: string) => void
}

const Logout = ({setUser}: ILogoutProps )=> {

    const handleLogout = async() => {
        const response = await fetch("http://localhost:3000/api/auth/logout", {
        method: "POST",
        credentials: "include",
      })
    
      if (response.status === 200) {
        setUser("")
      }
      }
    
return (
    <>
    <button onClick={handleLogout}>Log out</button>
    </>
)
}
export default Logout