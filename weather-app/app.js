const geocode = require('./geocode')
const forecast = require('./forecast')

if(process.argv.length === 2){
    console.log('Please enter a location')
}
else{
geocode(process.argv[2],(error,data)=>{
    if(error){
        console.log(error)
    }else{
    forecast(data.longitude, data.latitude, (error, forecastData) => {
        if(error)
        {
            console.log(error)
        }else{
            console.log(data.location)
            console.log(forecastData)
        }
      })
    }
})
}