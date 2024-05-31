const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
title:{
    type:String,
    required:true
},
description:{
    type:String,
    required:true
},
assignedTo:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'User'
},
deadline:{
    type:new Date(),
    required:true
},
project:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Project'
},
compeleted:{
    type:Boolean
}



},{timestamps:true})

module.exports = mongoose.model('Task',TaskSchema)