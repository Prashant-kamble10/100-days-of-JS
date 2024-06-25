const express = require("express");    // express is used for creating server
const app = express();
const port = 8000; // port created for the server to server
const connectDB = require("./db/dbConnection");
const User = require("./db/user");       // carefully see color of "User" word in this line.
const cors = require('cors');

// Middleware for parsing JSON
app.use(express.json());

// enable CORS
app.use(cors())

// Registration 
// here you will get the data from the frontend, and post that data to the momgoDB 
app.post("/register", async (req, res) => {
  try {
    const { username, password } = req.body;
    console.log("req.body", req.body);

    const user = new User({ username, password });      // model logic 
    await user.save();                                   // user.save(); this gets save in mongoDB   
    res.status(201).json({ message: "Registration Successfully" });
  } catch (error) {
    res.status(500).json({ error: "Registration failed" });
  }
});

// login

app.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(401).json({ error: "Invalid username or password" });
    }

    if (user.password !== password) {
      return res.status(401).json({ error: "Invalid username or password" });
    }
    res.status(200).json({ message: "Login Successful" });
  } catch (error) {
    res.status(500).json({ error: "Login Failed" });
  }
});

connectDB();
  // server created with the help of express.js
app.listen(port, () => {

  console.log("Server is listening on port 8000");
});
