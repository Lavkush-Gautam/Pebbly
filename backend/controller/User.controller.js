
import bcrypt from "bcryptjs";
import User from "../models/User.js";
import dotenv from 'dotenv'
dotenv.config();
import jwt from "jsonwebtoken";


export const Register = async (req, res) => {
    try {
        const { firstname, lastname, email, password, confirmPassword } = req.body;

        if (!firstname || !lastname || !email || !password || !confirmPassword) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }
        if (password !== confirmPassword) {
            return res.status(400).json({ message: "Passwords do not match" });
        }

        const hashedpassword = await bcrypt.hash(password, 10);
        const hashedconfirmPassword = await bcrypt.hash(confirmPassword, 10);


        const newUser = new User({
            firstname,
            lastname,
            email,
            password: hashedpassword,
            confirmPassword: hashedconfirmPassword
        });
        await newUser.save();

        res.status(200).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error("Error in Register:", error);
        res.status(500).json({ message: "Internal Server Error" });

    }
}


export const Login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password)
            return res.status(400).json({ message: "All fields are required" });

        const user = await User.findOne({ email });
        if (!user)
            return res.status(404).json({ message: "User not found" });

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid)
            return res.status(400).json({ message: "Invalid credentials" });

        // Tokens
        const accessToken = jwt.sign(
            { id: user._id },
            process.env.JWT_ACCESS_SECRET,
            { expiresIn: '15m' }
        );

        const refreshToken = jwt.sign(
            { id: user._id },
            process.env.JWT_REFRESH_SECRET,
            { expiresIn: '7d' }
        );

        // Send tokens in cookies
        res.cookie("accessToken", accessToken, {
            httpOnly: true,
            secure: true,
            sameSite: "None",
            maxAge: 15 * 60 * 1000 // 15 minutes
        });

        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            secure: true,
            sameSite: "None",
            maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
        });

        res.status(200).json({
            message: "Login successful",
            user: {
                id: user._id,
                email: user.email,
                firstname: user.firstname,
                lastname: user.lastname
            }
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
};


export const Logout = async (req, res) => {
    try {
        res.clearCookie("accessToken", {
            httpOnly: true,
            sameSite: "None", // match your login cookie settings
            secure: process.env.NODE_ENV === "production",
            maxAge: 0,
        });

        res.clearCookie("refreshToken", {
            httpOnly: true,
            sameSite: "None",
            secure: process.env.NODE_ENV === "production",
             maxAge: 0,
        });

        res.status(200).json({ message: "Logout successful" });
    } catch (error) {
        console.error("Error in Logout:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};


export const Profile = async (req, res) => {
    try {

        const user = await User.findById(req.user.id).select('-password');
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        return res.status(200).json({ user });
    } catch (error) {
        console.error('Profile error:', error);
        res.status(500).json({ message: 'Server Error' });
    }
};

export const UpdateProfile = async (req, res) => {
    try {
        const userId = req.user.id
        const { firstname, lastname, email, password, confirmPassword } = req.body

        const user = await User.findById(userId)
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        //update user

        if (firstname) user.firstname = firstname
        if (lastname) user.lastname = lastname
        if (email) user.email = email
        if (password) {
            const hashedpassword = await bcrypt.hash(password, 10)
            user.password = hashedpassword
        }

        const updatedUser = await user.save()

        res.status(200).json({
            message: "Profile updated successfully",
            user: {
                id: updatedUser._id,
                email: updatedUser.email,
                firstname: updatedUser.firstname,
                lastname: updatedUser.lastname
            }
        });
    } catch (err) {
        console.error("Update error:", err.message);
        res.status(500).json({ message: "Server error" });
    }
};

export const DeleteProfile = async (req, res) => {
    try {
        const userId = req.user.id;

        const { password } = req.body
        if (!password) {
            return res.status(400).json({ message: "Confirm password is required." });
        }
        const user = await User.findById(userId)
        if (!user) {
            return res.status(404).json({ message: "User not found." });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: "Incorrect password." });
        }

        await User.findByIdAndDelete(userId);
        res.status(200).json({ message: "Account deleted successfully." });

    } catch (error) {
        console.error("Error in DeleteProfile:", error);
        res.status(500).json({ message: "Server error." });
    }
}


export const updatePassword = async (req, res) => {
    try {
        const userId = req.user.id;
        const { currentPassword, newPassword } = req.body;

        if (!currentPassword || !newPassword) {
            return res.status(400).json({ message: 'Both current and new passwords are required.' });
        }

        const user = await User.findById(userId);
        if (!user) return res.status(404).json({ message: 'User not found' });

        const isMatch = await bcrypt.compare(currentPassword, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Current password is incorrect' });
        }

        const hashedPassword = await bcrypt.hash(newPassword, 10);
        user.password = hashedPassword;

        await user.save();
        res.status(200).json({ message: 'Password updated successfully' });

    } catch (error) {
        console.error('Update Password Error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
