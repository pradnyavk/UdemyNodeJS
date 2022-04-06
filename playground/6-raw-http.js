
const http = require('http')
const url = 'http://api.weatherstack.com/current?access_key=f92d8c5937b8d7e591b81060543bfc59&query=40,-75'


const request = http.request(url,(response)=>{
    let data=''

    response.on('data',(chunk)=>{
        data = data + chunk.toString()
    })

    response.on('end',()=>{
        console.log(JSON.parse(data))
    })

    request.on('error',(error)=>{
        console.log(error)
    })
})

request.end()