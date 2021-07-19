const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.post("/failure", function(req,res){
    res.redirect("/");
})

app.post("/", function(req,res){
    var firstName = req.body.fName;
    var lastName = req.body.lName;
    var email = req.body.email;

    var data = {
        members: [
            {
                email_address: email,
                status:"subscribed",
                merge_fields:{
                    FNAME: firstName,
                    LNAME: lastName
                }
            }
        ]
    };

    var jasonData = JSON.stringify(data);

    const url =  "https://us6.api.mailchimp.com/3.0/lists/a34631be9f";

    const options = {
        method: "POST",
        auth: "user:2dc9d1ad00efe544b81b5203afd2953c-us6"
    }

   const request = https.request(url, options, function(response){

        if(response.statusCode === 200){
            res.sendFile(__dirname + "/success.html")
        }else{
            res.sendFile(__dirname + "/failure.html")
        }

        response.on("data", function(data){
            console.log(JSON.parse(data));
        })
    })
    request.write(jasonData);
    request.end();
})

app.get("/", function(req,res){
    res.sendFile(__dirname + "/signup.html");
})

app.listen(process.env.PORT || 3000, function(){
    console.log("Serever running")
})
