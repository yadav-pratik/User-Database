const express = require('express')

const userController = require('../app/controllers/userController')

const authenticateUser = require('../app/middlewares/authentication')

const router = express.Router()

router.post('/api/user/register', userController.register)
router.post('/api/user/login', userController.login)
router.get('/api/user/account', authenticateUser, userController.account)

module.exports = router