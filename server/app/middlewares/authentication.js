const jwt = require('jsonwebtoken')

const authenticateUser = (req, res, next) => {
    const token = req.headers.authorization
    if(token){
        try {
            const tokenData = jwt.verify(token.split(' ')[1], 'secret123')
            req.tokenData = tokenData
            next()
        } catch (error) {
            res.json(error)
        }
    } else {
        res.json({
            notice : "Token must be provided!"
        })
    }
}

module.exports = authenticateUser