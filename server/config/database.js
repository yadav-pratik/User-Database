const mongoose = require('mongoose')

mongoose.set('strictQuery', true)

const url = 'mongodb://127.0.0.1:27017/nodeTest'

const configureDB = () => {
    mongoose.connect(url)
        .then(()=>{
            console.log('connected to db')
        })
        .catch(()=>{
            console.log('problem connecting to db')
        })
}

module.exports = configureDB