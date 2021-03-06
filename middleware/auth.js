const jwt = require('jsonwebtoken')
const config = require('config')

module.exports = function (req, res, next) {
   // token form  header
    const token = req.header('x-auth-token')

    // check if this is a token
    if(!token) {
        return res.status(401).json({ msg: 'No token, auth denied' })
    }

    try {
        const decoded = jwt.verify(token, config.get('jwtSecret'))

        req.user = decoded.user
        next()
    } catch (err) {
        res.status(401).json({ msg: 'Token is not valid' })
    }
}

// {
//     "email":"nadia@mail.com",
//     "password":"00700070"
// }