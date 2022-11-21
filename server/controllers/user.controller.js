const User = require('../models/user')
const fs = require('fs')

module.exports = class APIUser{
    static async FetchAllUser(req, res) {
        try {
            const Users = await User.find()
            res.status(200).json(Users)
        } catch (error) {
            res.status(400).json({ message: error.message })
        }
    }

    static async FetchUsersById(req, res) {
        const id = req.params.id
        try {
            const user = await User.findById(id)
            res.status(200).json(user)
        } catch (error) {
            res.status(400).json({ message: error.message })
        }
    }

    static async AddUser(req, res) {
        const user = req.body
        const img = req.file.filename
        user.Image = img
        try {
            await User.create(user)
            res.status(201).json({ message: 'User created successfully !' })
        } catch (error) {
            res.status(400).json({ message: error.message })
        }
    }

    static async DeleteUser(req, res) {
        const id = req.params.id
        try {
            const user = await User.findByIdAndDelete(id)
            if(user.Image != '') {
                try {
                    fs.unlinkSync('./uploads/' + user.Image)
                } catch (error) {
                    console.log(error)
                }
            }
            res.status(200).json({message: 'User deleted successfully !'})
        } catch (error) {
            res.status(400).json({ message: error.message })
        }
    }

    static async UpdateUser(req, res) {
        const id = req.params.id
        const user = await User.findById(id)

        var new_img = ''
        if(req.file) {
            try {
                new_img = req.file.filename
                fs.unlinkSync('./uploads/' + user.Image)
            } catch (error) {
                console.log(error)
            }
        } else {
            new_img = user.Image
        }

        const new_User = req.body
        new_User.Image = new_img

        try {
            await User.findByIdAndUpdate(id, new_User)
            res.status(200).json({ message: "User updated successfully !" })
        } catch (error) {
            res.status(400).json({ message: error.message })
        }
    }
}