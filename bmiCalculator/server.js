const express = require("express");

const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended:true}));// bmiCalculator.html form에서 오는 데이터를 처리하기 위해 필요한 parser이다.

// 홈페이지가 call되어있을 때, 작동되는 function을 작성해준 상태이다. -> bmiCalculator.html 출력
app.get("/", function(req, res){
    res.sendFile(__dirname + "/bmiCalculator.html");
});

//form에서 데이터가 post되었는 때, 서버에서 처리하기 위한 function이다. 기본적으로 text로 parse되기에 따로 Float로 묶어서 다시 나타내줘야 덧셈가능
app.post("/",function(req,res){

    let num1 = parseFloat(req.body.weight);
    let num2 = parseFloat(req.body.height);

    let result = num1 / (num2 * num2);
    res.send("bmi is " + result);
});

app.listen(3000);