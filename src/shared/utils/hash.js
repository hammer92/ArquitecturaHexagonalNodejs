const bcrypt = require('bcrypt')
const attemps = 10

const getHash = (password)=>{
    return bcrypt.hashSync(password,attemps)
}

const compare = (password1, password2) => {
    return bcrypt.compare(password1, password2)
}
module.exports = {
    getHash,
    compare
}
