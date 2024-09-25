const mongoose = require('mongoose');
const connect = mongoose.connect("mongodb://localhost:27017/students");

// Check if the database is connected
connect.then(() => {
    console.log("Database Connected Successfully");
}).catch(() => {
    console.log("Database cannot be Connected");
});

// Create Schema
const Loginschema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true,
        unique: true // Ensure mobile number is unique
    }
});

// Create a collection
const collection = new mongoose.model("users", Loginschema);

module.exports = collection;
