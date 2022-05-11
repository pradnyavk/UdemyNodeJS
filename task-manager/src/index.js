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