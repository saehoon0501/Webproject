const express =require("express");
const https = require("https");
const { join } = require("path");

const app = express();

app.get("/", function(req,res){
    res.send("Server is up");
    const url ="https://api.openweathermap.org/data/2.5/weather?q=Seoul&units=metric&appid=APIKeyFromOpenWeathermap"
    
    https.get(url, function(res2){
        console.log(res2.statusCode);
    
    
        res2.on("data", function(data){
            const weatherData = JSON.parse(data);
            console.log(weatherData.main.temp);
        });
    });
});


app.listen(3000, function(){
    console.log("Server is running on port 3000.");
})
