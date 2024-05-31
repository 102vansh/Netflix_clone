const {ErrorHandler} = require('../middleware/error')
const jwt = require('jsonwebtoken')
const User = require('../models/user.model')
exports.isauth = async(req,res,next) =>{
    try{
const {token} = req.cookies
if(!token){
    
    return next(new ErrorHandler("token is not in cookie",500))
}
const decoded = await jwt.verify(token,process.env.JWT_SECRET)
req.user = await User.findById(decoded.id)
// res.status(201).json({
//     success:true,
//     message:'User token find Successfully',
    
// })
next()
    }catch(error){
return next(error)
    }
}