const jwt=require('jsonwebtoken')
require('dotenv').config()
const secret=process.env.JWT_SECRET

const encrypt = (payload, secret) => {
  // your code here and return token
  return jwt.sign(payload, secret, {expiresIn:'5s', algorithm:'HS256'})
};

const decrypt=(token)=>{
  try {
    return jwt.verify(token, secret)
  } catch (error) {
    if(error.name=="TokenExpiredError"){
      console.error("Token expired")
      return {error: "Token expired"}
    }
    return {error:"Invalid token"}
  }
}

const payload={userId:"1", username:"abc"}
const token=encrypt(payload, secret)
console.log(token)

setTimeout(() => {
  console.log("Verifying token after expiration...");
  const result = decrypt(token);
  console.log("Result:", result);
}, 6000);

module.exports = encrypt;
