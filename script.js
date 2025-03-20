const jwt=require('jsonwebtoken')
require('dotenv').config()

const encrypt = (payload, secret=process.env.JWT_SECRET) => {
  // your code here and return token
  return jwt.sign(payload, secret, {expiresIn:'1hr', algorithm:'HS256'})
};

const payload={userId:"1", username:"abc"}
const token=encrypt(payload)
console.log(token)

module.exports = encrypt;
