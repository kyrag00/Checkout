import { ChangeEvent, useState } from "react"

interface ILoginProps {
    setUser: (user: string) => void
}

const Login = ({setUser}: ILoginProps) => {
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const handleLogin = async() => {
        const response = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "include",
        body: JSON.stringify({
            email: email, 
            password: password})
      })
        const data = await response.json()

        if (response.status === 200) {
          setUser(data)
        } else {
          setUser("")
        }
      }

      const handleEmail = (event: ChangeEvent<HTMLInputElement>) => { setEmail(event.target.value)}
      const handlePassword = (event: ChangeEvent<HTMLInputElement>) => {setPassword(event.target.value)}

    return (
        <>
        <input type="text" value={email} onChange={handleEmail} placeholder="Email"/>
        <input type="text" value={password} onChange={handlePassword} placeholder="Password" />
        <button onClick={handleLogin}>Log in</button>
        </>
    )
}
export default Login