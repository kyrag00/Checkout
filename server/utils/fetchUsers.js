const fs = require("fs").promises

const fetchUsers = async () => {
    try {
    const data = await fs.readFile("./users.json", "utf-8")
    if (!data) {
        return [];
    }
    const users = JSON.parse(data)
    return users
    
    } catch (error) {
    console.error("Error fetching users:", error);
    return [];
}
}

module.exports = fetchUsers