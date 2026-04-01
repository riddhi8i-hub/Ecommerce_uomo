require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const User = require("./models/User");

const app = express();

app.use(cors());
app.use(express.json());

// test route
app.get("/", (req, res) => {
    res.send("Backend working");
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));



//const User = require("./models/User");
// Save email
app.post("/email", async (req, res) => {
    const { email } = req.body;

    const user = new User({ email });
    await user.save();

    res.send("Email saved");
});

app.post("/register", async (req, res) => {
    const { name, email, password } = req.body;

    const existing = await User.findOne({ email });

    if (existing) {
        return res.send("User already exists");
    }

    const user = new User({ name, email, password });
    await user.save();

    res.send("Registered successfully");
});

app.post("/login", async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email, password });

    if (user) {
        res.send("Login successful");
    } else {
        res.send("Invalid email or password");
    }
});
