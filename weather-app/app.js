const request = require('request')
const apiCall = 'http://api.weatherstack.com/current?access_key=f92d8c5937b8d7e591b81060543bfc59&query=18.53765,74.0075'

request({url: apiCall,json:true},(error, response) => {
    //const data = JSON.parse(response.body)
    //console.log(response.body)
    //console.log(response.body.current.weather_descriptions[0] +'. It is currently '+ response.body.current.temperature + ' degrees out. There is a '+response.body.current.precip+'% chance of rain.')
})

const geoCodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoicHJhZG55YS1rYXRpZ2FyIiwiYSI6ImNsMWl3MzNjbzAzZ3Uza2sxZW16c2dxdnoifQ.EXXmmFf08JPdOvP0QI-Bhw&limit=1'

request({url:geoCodeURL,json:true},(error,response)=>{
    if(error){
        console.log('Unable to connect to the geocode api. Please check internet')
    }
    else if(response.body.message){
    
        console.log(response.body.message)
    }else if(response.body.features.length === 0){
        console.log('Could not find the said location')
    }
    else{
    console.log(response.body.features[0].center[1]+','+response.body.features[0].center[0])
    }
    
})