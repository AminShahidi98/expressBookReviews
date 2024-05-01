const express = require('express');
const jwt = require('jsonwebtoken');
let books = require("./booksdb.js");
const regd_users = express.Router();

let users = [];

const isValid = (username) => {
    filteredUsers = users.filter(u => u.username == username)
    if (filteredUsers.length > 0) {
        return true
    } else {
        return false
    }
}

const authenticatedUser = (username, password) => { //returns boolean
    user = users.filter(u => u.username == username)
    if (user.length > 0) {
        if (user[0].password == password) {
            return true
        } else {
            return false
        }
    } else {
        return false
    }
}

//only registered users can login
regd_users.post("/login", (req, res) => {
    return res.status(208).json({ message: "Invalid Login. Check username and password" });
    // const username = req.params.username;
    // const password = req.params.password;

    // if (!username || !password) {
    //     return res.status(404).json({ message: "Error logging in" });
    // }

    // if (authenticatedUser(username, password)) {
    //     let accessToken = jwt.sign({
    //         data: password
    //     }, 'access', { expiresIn: 60 * 60 });

    //     req.session.authorization = {
    //         accessToken, username
    //     }
    //     return res.status(200).send("User successfully logged in");
    // } else {
    //     return res.status(208).json({ message: "Invalid Login. Check username and password" });
    // }
});

// Add a book review
regd_users.put("/auth/review/:isbn", (req, res) => {
    //Write your code here
    return res.status(300).json({ message: "Yet to be implemented" });
});

module.exports.authenticated = regd_users;
module.exports.isValid = isValid;
module.exports.users = users;
