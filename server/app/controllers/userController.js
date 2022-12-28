const User = require('../models/user')
const { pick } = require('lodash')

const userController = {}

userController.register = async (req, res) => {
    const body = pick(req.body, ['name', 'mobile', 'loginId', 'password', 'country', 'state', 'city', 'description', 'image'])
    try {
        const user = new User(body)
        const userObj = await user.save()
        res.json(userObj)
    } catch (error) {
        res.json(error)
    }
}

module.exports = userController