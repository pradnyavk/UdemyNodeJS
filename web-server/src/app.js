const express = require('express')
const path = require('path')
const hbs = require('hbs')

const app = express()
const publicPath = path.join(__dirname,'../public')

//By default hbs looks for /views directory but to customize the directory for hbs do the following:
const viewsPath = path.join(__dirname,'../templates/views')

const partialsPath = path.join(__dirname,'../templates/partials')
//setting viewsPath to views
app.set('views',viewsPath)

hbs.registerPartials(partialsPath)

//setup static directory to serve
app.use(express.static(publicPath))

//setup handlebars engine
app.set('view engine','hbs')
app.get('',(req,res)=>{
    res.render('index',{
        title:'Weather',
        name:'Pradnya Katigar'
    })
})

app.get('/help',(req,res)=>{
    res.render('help',{
        title:'Help Page',
        name:'Pradnya Katigar'
    })
})

app.get('/about',(req,res)=>{
    res.render('about',{
        title:'About Page',
        name:'Pradnya Katigar'
    })
})

app.get('/weather',(req,res)=>{
    res.send({
        forecast:'Sunny',
        location:'Pune'
    })
})
app.get('/help/*',(req,res)=>{
    res.send('Help page not found')
})
app.get('*',(req,res)=>{
    res.send('404 Page')
})



app.listen(3000,()=>{
    console.log('Started on port 3000')
})