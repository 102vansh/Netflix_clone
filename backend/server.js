const express = require('express')
const app = express()
const dotenv = require('dotenv')
const cors = require('cors')
const cookieparser = require('cookie-parser')
const cloudinary = require('cloudinary').v2
const fileupload = require('express-fileupload')
const{errormiddleware} = require('./middleware/error')
require('./db/conn')
dotenv.config({path:"./config/config.env"})
const port = process.env.PORT
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieparser())

// cloudinary.config({ 
//     cloud_name: process.env.NAME, 
//     api_key:process.env.KEY , 
//     api_secret: process.env.SECRET 
//   });
//   app.use(fileupload({
//     useTempFiles: true,
//     tempFileDir: "/tmp/",
//   }))
app.use(cors({
  origin:'http://localhost:5173',
  methods:['POST','GET','PUT','DELETE'],
  credentials:true
}))
 
const userrouter = require('./routes/user.route')
const projectrouter = require('./routes/project.route')
const taskrouter = require('./routes/task.route')
app.use('/api/v1/user',userrouter)
app.use('/api/v1/project',projectrouter)
app.use('/api/v1/task',taskrouter)


app.use(errormiddleware)
app.listen(port,(req,res)=>{
    console.log(`server is running at port no..${port}`)
})