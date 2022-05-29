const express = require('express')
//to just run the mongoose file to connect to database
require('./db/mongoose')
const userRouter = require('./routers/users')
const taskRouter = require('./routers/tasks')


const app = express()
const port = process.env.PORT || 3000


// app.use((req,res,next)=>{
//     console.log(req.path,req.method)
//     next()
// })

//to consider the incoming data as json

// const multer = require('multer')
// const upload = multer({
//     dest:'images',
//     limits:{
//         fileSize:1000000
//     },
//     fileFilter(req,file,cb){
//         if(!file.originalname.endsWith('.pdf')){
//             return cb(new Error('Please upload a PDF!'))
//         }
//         cb(undefined,true)
//     }
// })

// app.post('/upload',upload.single('upload'),(req,res)=>{
//     res.send()
// })

app.use(express.json())

app.use(userRouter)
app.use(taskRouter)


app.listen(port,()=>{
    console.log('Server is up on port: '+port)
})

// const bcrypt = require('bcrypt')

// const myfuction = async()=>{
//     const password = 'Red12345!'
//     const hashedPassword = await bcrypt.hash(password,8)

//     console.log('Password:'+password)
//     console.log('Hashed Password:'+hashedPassword)

//     const isMatch = await bcrypt.compare('red12345!',hashedPassword)
//     console.log(isMatch)
// }

// myfuction()

// const jwt = require('jsonwebtoken')

// const myfuction = async () =>{
//     const token  = jwt.sign({_id:'abc123'},'thisisthesecret')
//     console.log(token)

//     const data = jwt.verify(token,'thisisthesecret')
//     console.log(data)
// }

// myfuction()

// const Task = require('./models/task')
// const User = require('./models/user')


// const main = async () =>{
//     // const task = await Task.findById('628ba7c433d81bd27875cb23')
//     // await task.populate('owner')
//     // console.log(task.owner)

//     const user = await User.findById('628ba77033d81bd27875cb1e')
//     await user.populate('tasks')
//     console.log(user.tasks)
// }

// main()