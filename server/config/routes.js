const express = require('express')

const userController = require('../app/controllers/userController')

const authenticateUser = require('../app/middlewares/authentication')
const authorizeUser = require('../app/middlewares/authorization')

const router = express.Router()

router.post('/api/user/register', userController.register)
router.post('/api/user/login', userController.login)
router.get('/api/user/account', authenticateUser, userController.account)
router.get('/api/user/list', authenticateUser, authorizeUser, userController.list)

module.exports = router