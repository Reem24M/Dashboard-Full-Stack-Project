import User from "../models/user.model.js"


export const GetAllUsers = async (req, res) => {
    try {

        const users = User.find()
        if (!users) {
            return res.status(400).json({ message: "there is no users" })
        }
        return res.status(200).json(users)
    } catch (err) {
        return res.status(500).json({ message: "internal server error" })
    }
}

export const GetUserByID = async (req, res) => {
    try {

        const { id } = req.params
        if (!id) {
            return res.status(400).json({ message: "this user not found" })
        }
        const user = User.findOne({ id })
        if (!user) {
            return res.status(400).json({ message: "this user not found" })
        }
        return res.status(200).json({ user })
    } catch (err) {
        return res.status(500).json({ message: "internal server error" })
    }
}

export const UpdateUser = async (req, res) => {
    try {

        const { id } = req.params
        const { name, email, role } = req.body
        if (!id) {
            return res.status(400).json({ message: "this user not found" })
        }
        const user = await User.findOneAndUpdate({ id }, { name, email, role }, { new: true })
        if (!user) {
            return res.status(400).json({ message: "this user not found" })
        }
        return res.status(200).json({ user })
    } catch (err) {
        return res.status(500).json({ message: "internal server error" })
    }
}

export const DeleteUser = async (req, res) => {
    try {

        const { id } = req.params

        if (!id) {
            return res.status(400).json({ message: "this user not found" })
        }
        const user = await User.findOneAndDelete({ id })
        if (!user) {
            return res.status(400).json({ message: "this user not found" })
        }
        return res.status(200).json({ message: "user deleted successfully" })
    } catch (err) {
        return res.status(500).json({ message: "internal server error" })
    }
}