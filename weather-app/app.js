const request = require('request')
const apiCall = 'http://api.weatherstack.com/current?access_key=f92d8c5937b8d7e591b81060543bfc59&query=India'

request({url: apiCall},(error, response) => {
    console.log(response)
})