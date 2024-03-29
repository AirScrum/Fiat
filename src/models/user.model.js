const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        },
    lastName: {
        type: String,
        required: true,
        },
    email: {
        type: String,
        required: true,
        },
    password: {
        type: String,
        },
    googleId: {
        type: String,
    },
    birthDate: {
        type: String,
        },
    phoneNo: {
        type: String,
        },
    gender: {
        type: String,
        },
    title: {
        type: String,
        },
    address: {
        type: String,
        },
    bio: {
        type: String,
        },
}, { timestamps: true });

export const User = mongoose.model('User', userSchema);
