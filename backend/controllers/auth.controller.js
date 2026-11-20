import bcrypt from 'bcrypt'
import jsonwebtoken from 'jsonwebtoken'
import User from '../models/user.model.js'

export const Register = async (req, res) => {
    try {

        const { name, email, password, role } = req.body

        if (!name || !email || !password) {
            return res.status(400).json({ message: "Please fill all the fields" })
        }
        const user = await User.findOne({ email })
        if (user) {
            return res.status(409).json({ message: "User already exists" })
        }
        const hashpass = await bcrypt.hash(password, 10)
        const newuser = await User.create({
            name: name,
            email: email,
            password: hashpass,
            role: role
        })
        await newuser.save()
        return res.status(201).json({ message: "User created successfully", user: newuser })
    } catch (error) {
        return res.status(500).json({
            message: "Server error",
            error: error.message,
        });
    }
}
export const Login = async (req, res) => {
    try {

        const { email, password } = req.body
        if (!email || !password) {
            return res.status(400).json({ message: "Please fill all the fields" })
        }
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(404).json({ message: "User not found" })
        }
        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid credentials" })
        }
        const token = jsonwebtoken.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN })
        return res.status(200).json({ message: "Login successful", token, user })
    } catch (error) {
        return res.status(500).json({
            message: "Server error",
            error: error.message,
        });
    }

}
export const Logout = async (req, res) => {

}



