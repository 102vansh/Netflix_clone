const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const userSchema =  new mongoose.Schema({
    name:{
        type:String,
        require:true

    },
    email:{
        type:String,
        require:true,
        validate:[validator.isEmail,"Enter correct email type"]

    },
    password:{
        type:String,
        require:true

    },
    avatar:{
       public_id:{
        type:String,
       },
       url:{
        type:String
       }

    },
})
userSchema.pre("save",async function(next){
    if(this.isModified('password')){
this.password = await bcrypt.hash(this.password,10)
    }
return next()
})
userSchema.methods.comparepassword = async function(password){
return await bcrypt.compare(password,this.password)
}
userSchema.methods.generatetoken = async function(){
    return jwt.sign({id:this._id},process.env.JWT_SECRET,{expiresIn:process.env.JWT_EXPIRE})
}



module.exports = mongoose.model('User',userSchema)
