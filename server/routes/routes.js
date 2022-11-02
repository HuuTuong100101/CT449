const express = require('express')
const router = express.Router()
const API = require('../controllers/shoe.controllers')
const multer = require('multer')

// handle image with multer
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './uploads')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '_' + Date.now() + '_' + file.originalname)
    }
})

const upload = multer({
    storage: storage,
}).single('image')

router.get('/', API.FetchAllShoes)
router.get('/:id', API.FetchShoesById)
router.post('/',upload, API.AddShoe)
router.delete('/:id',API.DeleteShoe)
router.patch('/:id', upload, API.UpdateShoe)

module.exports = router