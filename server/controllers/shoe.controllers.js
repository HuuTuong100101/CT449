const Shoe = require('../models/shoe')
const fs = require('fs')

module.exports = class API{
    static async FetchAllShoes(req, res) {
        try {
            const shoes = await Shoe.find()
            res.status(200).json(shoes)
        } catch (error) {
            res.status(400).json({ message: error.message })
        }
    }

    static async FetchShoesById(req, res) {
        const id = req.params.id
        try {
            const shoe = await Shoe.findById(id)
            res.status(200).json(shoe)
        } catch (error) {
            res.status(400).json({ message: error.message })
        }
    }

    static async AddShoe(req, res) {
        const shoe = req.body
        const img = req.file.filename
        shoe.image = img
        try {
            await Shoe.create(shoe)
            res.status(201).json({ message: 'Shoe created successfully !' })
        } catch (error) {
            res.status(400).json({ message: error.message })
        }
    }

    static async DeleteShoe(req, res) {
        const id = req.params.id
        try {
            const shoe = await Shoe.findByIdAndDelete(id)
            if(shoe.image != '') {
                try {
                    fs.unlinkSync('./uploads/' + shoe.image)
                } catch (error) {
                    console.log(error)                    
                }
            }
            res.status(200).json({message: 'Shoe deleted successfully !'})
        } catch (error) {
            res.status(400).json({ message: error.message })
        }
    }

    static async UpdateShoe(req, res) {
        const id = req.params.id
        const shoe = await Shoe.findById(id)

        var new_img = ''
        if(req.file) {
            try {
                new_img = req.file.filename
                fs.unlinkSync('./uploads/' + shoe.image)
            } catch (error) {
                console.log(error)
            }
        } else {
            new_img = shoe.image
        }

        const new_shoe = req.body
        new_shoe.image = new_img

        try {
            await Shoe.findByIdAndUpdate(id, new_shoe)
            res.status(200).json({ message: "Shoe updated successfully !" })
        } catch (error) {
            res.status(400).json({ message: error.message })
        }
    }
}