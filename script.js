const jwt=require('jsonwebtoken')
require('dotenv').config()
const secret=process.env.JWT_SECRET

const encrypt = (payload, secret) => {
  // your code here and return token
  return jwt.sign(payload, secret, {expiresIn:'1hr', algorithm:'HS256'})
};

const payload={userId:"1", username:"abc"}
const token=encrypt(payload, secret)
console.log(token)

module.exports = encrypt;
