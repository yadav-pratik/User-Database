const User = require('../models/user')
const { pick, omit } = require('lodash')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

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

userController.login = async (req, res) => {
    const body = pick(req.body, ['loginId', 'password'])
    try {
        const user = await User.findOne({loginId : body.loginId})
        if(user){
            const match = await bcrypt.compare(body.password, user.password)
            if(match){
                const tokenData = {
                    _id : user._id,
                    role : user.role
                }
                const token = jwt.sign(tokenData, 'secret123', {expiresIn : '7d'})
                res.json({
                    token : `Bearer ${token}`
                })
            } else {
                res.json({
                    notice : "Invalid Login Credentials."
                })
            }
        } else {
            res.json({
                notice : "Invalid Login Credentials."
            })
        }
    } catch (error) {
        res.json(error)
    }
}

userController.account = async (req, res) => {
    try {
        const user = await User.findById(req.tokenData._id)
        const userObj = JSON.parse(JSON.stringify(user))
        res.json(omit(userObj, ['password']))
    } catch (error) {
        res.json(error)
    }
}

userController.list = async (req, res) => {
    try {
        const users = await User.find({role : 'user'})
        res.json(users)
    } catch (error) {
        res.json(error)
    }
}

userController.update = async (req, res) => {
    const id = req.params.id
    const body = pick(req.body, ['name', 'mobile', 'country', 'state', 'city', 'description', 'image'])
    try {
        const user = await User.findByIdAndUpdate(id, body, {new : true, runValidators: true})
        const userObj = JSON.parse(JSON.stringify(user))
        res.json(omit(userObj, ['password']))
    } catch (error) {
        res.json(error)
    }
}

module.exports = userController