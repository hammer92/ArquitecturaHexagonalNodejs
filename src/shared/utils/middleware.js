const jwt = require('jsonwebtoken')
const auth = (req, res, next) => {
    const token = req.get('Authorization')
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({error: 'Credenciales no válidas'})
        }
        req.usuario = decoded;
        next()
    })
}

module.exports = {
    auth,
}
