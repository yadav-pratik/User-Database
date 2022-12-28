const mongoose = require('mongoose')

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

const User = mongoose.model('User', userSchema)

module.exports = User