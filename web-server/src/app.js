const express = require('express')
const path = require()

const app = express()


app.get('',(req,res)=>{
    res.send('Welcome!')
})

app.get('/help',(req,res)=>{
    res.send('Need help?')
})

app.get('/about',(req,res)=>{
    res.send('<h1>This is about page<h1>')
})

app.get('/weather',(req,res)=>{
    res.send({
        forecast:'Sunny',
        location:'Pune'
    })
})

app.listen(3000,()=>{
    console.log('Started on port 3000')
})