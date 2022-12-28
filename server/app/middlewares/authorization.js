const authorizeUser = (req, res, next) => {
    if(req.tokenData.role === 'admin'){
        next()
    } else {
        res.json({
            notice : "You must be an Admin to access this route!"
        })
    }
}