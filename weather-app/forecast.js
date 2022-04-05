const request = require('request')

const forecast = (longitude,latitude,callback) =>{
    const url = 'http://api.weatherstack.com/current?access_key=f92d8c5937b8d7e591b81060543bfc59&query='+latitude+','+longitude
    request({url:url,json:true},(error,response) => {
        if(error){
            callback('Unable to connect to weather service!',undefined)
        }else if(response.body.error){
            callback('Unable to find location!',undefined)
        }else{
            callback(undefined,response.body.current.weather_descriptions[0] +'. It is currently '+ response.body.current.temperature + ' degrees out. There is a '+response.body.current.precip+'% chance of rain.')
        }
    })
}

module.exports = forecast