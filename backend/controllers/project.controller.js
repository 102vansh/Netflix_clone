const Project = require('../models/project.model')
const {ErrorHandler} = require('../middleware/error')

exports.createproject = async(req,res,next) =>{
    try{
const{title,description} = req.body
if(!title || !description){
    return next(new ErrorHandler('provide all details',500))
}
const project = await Project.create({
    title,
    description,
    createdBy:req.user._id
})
res.status(201).json({
    success:true,
    message:'project created successfully',
    project
})

    }catch(error){
return next(error)
    }
}

exports.getsingleproject = async(req,res,next) =>{
    try{

        const singleproject = await Project.findById(req.params.id)
        res.status(201).json({
            success:true,
            message:' single project founded  successfully',
            singleproject
        })
        

    }catch(error){
return next(error)
    }
}

exports.getallproject = async(req,res,next) =>{
    try{
        const allproject = await Project.find({})
        res.status(201).json({
            success:true,
            message:' All project founded  successfully',
            allproject
        })
    }catch(error){
return next(error)
    }
}

exports.updateproject = async(req,res,next) =>{
    try{
        const{title,description} = req.body
        createdBy = req.user._id
        const project = await Project.find({createdBy})
        if(!project){
            return next(new ErrorHandler('project is not found',500))
        }
const updatedproject = await Project.findByIdAndUpdate(createdBy,req.body)
        res.status(201).json({
            success:true,
            message:' All project updated successfully',
        updatedproject
        })
    }catch(error){
return next(error)
    }
}

exports.deleteproject = async(req,res,next) =>{
    try{
      
        const project = await Project.findById(req.user._id)
        if(!project){
            return next(new ErrorHandler('project is not found',500))
        }
const deletedproject = await Project.findByIdAndDelete(req.user._id)
        res.status(201).json({
            success:true,
            message:' All project deleted successfully',
        deletedproject
        })
    }catch(error){
return next(error)
    }
}



