import jwt from 'jsonwebtoken'

function createToken(user){
    const token = jwt.sing(user[0],'testKey')
    return token
}

export default createToken;

