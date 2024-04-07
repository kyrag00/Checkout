const initStripe = require("../stripe")
const fs = require("fs").promises
const bcrypt = require("bcrypt")

const register = async(req, res) => {
    const {email, password} = req.body

//Check if user already exists
const users = await fetchUsers()
const userAlreadyExists = users.find(u => u.email === email)

if (userAlreadyExists) {
    return res.status(400).json("User already exists")
}

//Encrypt password
const hashedPassword = await bcrypt.hash(password, 10)

//Save to database
const newUser = {
    email,
    password: hashedPassword
}
users.push(newUser)
await fs.writeFile("./data/users.json", JSON.stringify(users, null, 2))
res.status(201).json(newUser)
}

const login = async(req, res) => {
    const {email, password} = req.body

    //Check user
    const users = await fetchUsers()
    const userExists = users.find(u => u.email === email)

    //Check password
    if (!userExists || !await bcrypt.compare(password, userExists.password)) {
        return res.status(400).json("Wrong user or password")
    }

    //Create a session
    req.session.user = userExists
    res.status(200).json(userExists.email)
}

const logout = (req, res) => {
    req.session = null
    res.status(200).json("Succesfully logged out")
}

const authorize = (req, res) => {
    if (!req.session.user) {
        return res.status(401).json("You are not logged in")
    }
    res.status(200).json(req.session.user.email)
}

module.exports = {register, login, logout, authorize}