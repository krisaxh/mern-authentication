const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        minLength: 4,
        unique: true,
        required: true
    }, 
    password: {
        type: String,
        minLength: 4,
        required: true
    },
    createdBy: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const userModel = mongoose.model("users", userSchema);
module.exports = userModel;