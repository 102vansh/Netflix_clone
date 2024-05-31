const User = require('../models/user.model')
const {ErrorHandler} = require('../middleware/error')
const cloudinary = require('cloudinary')

exports.registeruser = async(req,res,next) =>{
    try{
        const {name,email,password} = req.body
        // const {avatar} = req.files
        // if(!req.files || Object.keys(req.files).length=== 0){
        //     return next(new ErrorHandler("avatar image is not founded",500))
        // }

        if(!name || !email || !password){
return next(new ErrorHandler("please provide all details",500))
        }
    let user = await User.findOne({email})
    if(user){
        return next(new ErrorHandler("you are allready registered",500))
    }
    
    // const cloudinaryResponse = await cloudinary.uploader.upload(
    //     avatar.tempFilePath
    //   );
    //   if (!cloudinaryResponse || cloudinaryResponse.error) {
    //     console.error(
    //       "Cloudinary error:",
    //       cloudinaryResponse.error || "Unknown cloudinary error!"
    //     );
    //   }
    user = await User.create({name,email,password,
    // avatar:{
    //     public_id: cloudinaryResponse.public_id,
    //     url:cloudinaryResponse.url,
    // }
    })
    res.status(201).json({
        success:true,
        message:'User Register Successfully',
        user
    })


    }catch(error){
return next(error)
    }
}
exports.login = async (req,res,next) =>{
    try{
const {email,password} = req.body
const user = await User.findOne({email})
if(!user){
    return next(new ErrorHandler("you are not registered",500))
}
const ismatched = await user.comparepassword(password)
if(!ismatched){

    return next(new ErrorHandler("enter valid email or password",500))
}
const token = await user.generatetoken()
console.log(token)
const option = {
    expiresin: new Date(
        process.env.COOKIE_EXPIRE * 24 *60 *60* 1000
    ),
    httpOnly:true
}
res.status(201).cookie('token',token,option).json({
    success:true,
    message:"logedin successfully",
    user,
    token
})
    }catch(error){
return next(error)
    }
}
exports.logout = async(req,res,next) =>{
    try{
        res.cookie('token',null,{expires: new Date(Date.now())}).status(201).json({
            success:true,
            message:"successfuly logout"
        })
    }catch(error){
        return next(error)
    }

}
exports.myprofile = async(req,res,next)=>{
    try{
const myprofile = await User.findById(req.user._id)
res.status(201).json({
    success:true,
    message:'User profile founded Successfully',
myprofile
})

    }catch(error){
return next(error)
    }
}
exports.allusers = async(req,res,next) =>{
    try{
const allusers = await User.find({})
res.status(201).json({
    success:true,
    message:'All profile founded Successfully',
allusers
})
    }catch(error){
return next(error)
    }
}