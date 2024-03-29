import mongoose from "mongoose";

const userCollection = "users";

const userSchema = new mongoose.Schema({
    full_name: {
        type: String,
        trim: true,
    },
    first_name: {
        type: String,
        required: true,
        trim: true,
    },
    last_name: {
        type: String,
        trim: true,
    },
    age: {
        type: Number,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,
    },
    role: {
        type: String,
        enum: ["user", "admin", "premium"],
        default: "user"
    },

});

export const userModel = mongoose.model(userCollection, userSchema);