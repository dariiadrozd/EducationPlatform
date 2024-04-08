import jwt from 'jsonwebtoken'

function createToken(user){
    const token = jwt.sign(user[0],'testKey')
    return token
}

export default createToken;

