const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const Schema = mongoose.Schema

const userSchema = new Schema({
    name : {
        type : String,
        required : true
    },
    mobile : {
        type : String, 
        required : true,
        maxLength : 10,
        minLength : 10
    },
    loginId : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    },
    country : {
        type : String,
        required : true
    },
    state : {
        type : String,
        required : true 
    },
    city : {
        type : String,
        required : true 
    },
    description : {
        type : String,
        maxLength : 300 
    },
    image : {
        type : String
    }
})

userSchema.pre('save', async function (next){
    const user = this
    try {
        const salt = await bcrypt.genSalt(10)
        const encrypted = await bcrypt.hash(user.password, salt)
        user.password = encrypted
        next()
    } catch (error) {
        console.log(error)
    }
})

const User = mongoose.model('User', userSchema)

module.exports = User