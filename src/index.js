const express = require("express");
const path = require("path");
const collection = require("./config");
const bcrypt = require('bcrypt');

const app = express();
// convert data into json format
app.use(express.json());

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, '../public')));

app.use(express.urlencoded({ extended: false }));
// use EJS as the view engine
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("login");
});

app.get("/signup", (req, res) => {
    res.render("signup");
});

// Register User
app.post("/signup", async (req, res) => {
    const data = {
        name: req.body.username,
        password: req.body.password,
        mobile: req.body.mobile
    }

    // Check if the username or mobile number already exists in the database
    const existingUser = await collection.findOne({ name: data.name });
    const existingMobile = await collection.findOne({ mobile: data.mobile });

    if (existingUser) {
        res.send('User already exists. Please choose a different username.');
    } else if (existingMobile) {
        res.send('Mobile number already exists. Please use a different mobile number.');
    } else {
        // Hash the password using bcrypt
        const saltRounds = 10; // Number of salt rounds for bcrypt
        const hashedPassword = await bcrypt.hash(data.password, saltRounds);

        data.password = hashedPassword; // Replace the original password with the hashed one

        const userdata = await collection.insertMany(data);
        console.log(userdata);
        res.redirect("/"); // Redirect to the login page after successful signup
    }
});

// Login user 
// Login user 
app.post("/login", async (req, res) => {
    try {
        // Check if the input is a mobile number or username
        const { username } = req.body;
        const checkByUsername = await collection.findOne({ name: username });
        const checkByMobile = await collection.findOne({ mobile: username });

        // Determine which method to use for authentication
        let user;
        if (checkByUsername) {
            user = checkByUsername;
        } else if (checkByMobile) {
            user = checkByMobile;
        } else {
            return res.send("Username or mobile number not found");
        }

        // Compare the hashed password from the database with the plaintext password
        const isPasswordMatch = await bcrypt.compare(req.body.password, user.password);
        if (!isPasswordMatch) {
            res.send("Wrong Password");
        } else {
            res.render("home");
        }
    } catch {
        res.send("An error occurred during login");
    }
});


// Define Port for Application
const port = 5000;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
});
