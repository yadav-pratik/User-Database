const User = require('../models/user')
const { pick } = require('lodash')

const userController = {}

userController.register = async (req, res) => {
    const body = pick(req.body, ['name', 'mobile', 'loginId', 'password', 'country', 'state', 'city', 'description', 'image'])
    try {
        const user = new User(body)
        const userObj = await user.save()
        res.json({
            success : "Account Added Successfully!!"
        })
    } catch (error) {
        if(error.code === 11000) {
            res.json({
                notice : 'Email or Username is already taken!'
            })
        } else {
            res.json(error)
        }
    }
}

module.exports = userController