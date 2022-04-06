const geocode = require('./geocode')
const forecast = require('./forecast')

if(process.argv.length === 2){
    console.log('Please enter a location')
}
else{
geocode(process.argv[2],(error,{latitude,longitude,location}={})=>{
    if(error){
        console.log(error)
    }else{
    forecast(longitude, latitude, (error, forecastData) => {
        if(error)
        {
            console.log(error)
        }else{
            console.log(location)
            console.log(forecastData)
        }
      })
    }
})
}