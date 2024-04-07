import { ChangeEvent, useState } from "react"

const Register = () => {
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const handleRegister = async() => {
        const response = await fetch("http://localhost:3000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email: email,
            password: password})
      })
        const data = await response.json()
        console.log(data)
      }

      const handleEmail = (event: ChangeEvent<HTMLInputElement>) => { setEmail(event.target.value)}
      const handlePassword = (event: ChangeEvent<HTMLInputElement>) => {setPassword(event.target.value)}

      return (
        <>
        <input type="text" value={email} onChange={handleEmail} placeholder="Email"/>
        <input type="text" value={password} onChange={handlePassword} placeholder="Password" />
        <button onClick={handleRegister}>Register</button>
        </>
      )
}

export default Register