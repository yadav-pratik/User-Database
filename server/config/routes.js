const express = require('express')
const multer = require('multer')
const path = require('path')

const userController = require('../app/controllers/userController')

const authenticateUser = require('../app/middlewares/authentication')
const authorizeUser = require('../app/middlewares/authorization')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, '/public/'))
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '_' + file.originalname)
    }
})

// const storage = multer.diskStorage({
//     destination : (req, file, cb) => {
//         cb(null, 'public')
//     },
//     filename : (req, file, cb) => {
//         console.log(file, 'inside route')
//         cb(null, Date.now() + path.extname(file.originalname))
//     }
// })

const upload = multer({ storage: storage })

const router = express.Router()

router.post('/api/user/register',  upload.single('image'), userController.register)
router.post('/api/user/login', userController.login)
router.get('/api/user/account', authenticateUser, userController.account)
router.get('/api/user/list', authenticateUser, authorizeUser, userController.list)
router.put('/api/user/update/:id', authenticateUser, authorizeUser, userController.update)
router.delete('/api/user/delete/:id', authenticateUser, authorizeUser, userController.delete)

module.exports = router