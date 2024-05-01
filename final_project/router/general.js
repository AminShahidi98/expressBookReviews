const express = require('express');
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();


public_users.post("/register", (req,res) => {
  let username = req.query.username
  let password = req.query.password
  if (password || username) {
    users.push({username:username, password:password})
    return res.status(200).json({message: `User '${username}' has been created. Current users: ${users.length}`});
  } else {
      return res.status(300).json({message: "Insufficient information"});
  }
});

// Get the book list available in the shop
public_users.get('/',function (req, res) {
  return res.status(300).json({data: books});
});

// Get book details based on ISBN
public_users.get('/isbn/:isbn',function (req, res) {
  let isbn = Number(req.params.isbn)
  return res.status(300).json({data: books[isbn]});
 });
  
// Get book details based on author
public_users.get('/author/:author',function (req, res) {
  let author = req.params.author
  let booksArray = Object.values(books);
  console.log(author);
  let filtered = booksArray.filter(b => b.author == author)
  console.log(filtered);
  return res.status(300).json({data: filtered});
});

// Get all books based on title
public_users.get('/title/:title',function (req, res) {
    let title = req.params.title
    let booksArray = Object.values(books);
    console.log(title);
    let filtered = booksArray.filter(b => b.title == title)
    console.log(filtered);
    return res.status(300).json({data: filtered});
});

//  Get book review
public_users.get('/review/:isbn',function (req, res) {
    let isbn = Number(req.params.isbn)
    return res.status(300).json({data: books[isbn].reviews});
});

module.exports.general = public_users;
