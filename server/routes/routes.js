const express = require('express')
const router = express.Router()
const API = require('../controllers/shoe.controllers')
const multer = require('multer')
const APIUser = require('../controllers/user.controller')

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
}).single('Image')

router.get('/', API.FetchAllShoes)
router.get('/:id', API.FetchShoesById)
router.post('/',upload, API.AddShoe)
router.delete('/:id',API.DeleteShoe)
router.patch('/:id', upload, API.UpdateShoe)

router.get('/user/alluser', APIUser.FetchAllUser)
router.get('/user/:id', APIUser.FetchUsersById)
router.post('/user/adduser',upload, APIUser.AddUser)
router.delete('/user/:id',APIUser.DeleteUser)
router.patch('/user/:id', upload, APIUser.UpdateUser)

module.exports = router