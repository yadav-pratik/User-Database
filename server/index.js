const express = require('express')
const cors = require('cors')

const router = require('./config/routes')
const configureDB = require('./config/database')

const port = process.env.PORT || 3400

configureDB()

const app = express()

app.use('/config/public', express.static('config/public'))
app.use(express.json())
app.use(cors())
app.use(router)

app.listen(port, ()=>{
    console.log('server is running on port ', port)
})