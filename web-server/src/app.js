const express = require('express')
const path = require('path')

const app = express()
const publicPath = path.join(__dirname,'../public')


app.use(express.static(publicPath))
// app.get('',(req,res)=>{
//     res.send('Welcome!')
// })

// app.get('/help',(req,res)=>{
//     app.use(express.static(publicPath+'/help.html'))
// })

// app.get('/about',(req,res)=>{
//     res.send('<h1>This is about page<h1>')
// })

app.get('/weather',(req,res)=>{
    res.send({
        forecast:'Sunny',
        location:'Pune'
    })
})

app.listen(3000,()=>{
    console.log('Started on port 3000')
})