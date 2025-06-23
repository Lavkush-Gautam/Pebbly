import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        required: true,
    }
    , lastname: {
        type: String,
        required: true,
        required: true,
    }
    , email: {
        type: String,
        required: true,
        unique: true,
        required: true,
    }
    , password: {
        type: String,
        required: true,
        minlength: 6,
        required: true,
    },
    confirmPassword: {
        type: String,
        required: true,
        minlength: 6,
        required: true,
    }
})

const User = mongoose.model("User", userSchema);

export default User
