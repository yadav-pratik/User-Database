const express = require('express')

const configureDB = require('./config/database')

const port = process.env.PORT || 3400

configureDB()

const app = express()

app.listen(port, ()=>{
    console.log('server is running on port ', port)
})