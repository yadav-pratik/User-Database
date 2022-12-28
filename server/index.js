const express = require('express')


const router = require('./config/routes')
const configureDB = require('./config/database')

const port = process.env.PORT || 3400

configureDB()

const app = express()

app.use(express.json())
app.use(router)

app.listen(port, ()=>{
    console.log('server is running on port ', port)
})