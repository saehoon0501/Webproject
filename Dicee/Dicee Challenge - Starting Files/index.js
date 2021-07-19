var randomNumber1 = Math.floor(Math.random()*6)+1;

var randomDiceImage = "dice" + randomNumber1 + ".png";

var randomImageSource = "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];

var randomNumber2 = Math.floor(Math.random()*6)+1;

var randomDiceImage2 = "dice" + randomNumber2 + ".png";

var randomImageSource2 = "images/" + randomDiceImage2;

var image2 = document.querySelectorAll("img")[1];

image1.setAttribute("src", randomImageSource);
image2.setAttribute("src", randomImageSource2);

var sign = document.querySelector("h1");

if(randomNumber1 > randomNumber2){
    sign.innerHTML = "⚑Play 1 wins!"
}else if(randomNumber1 === randomNumber2){
    sign.innerHTML = "Draw"
}else{
    sign.innerHTML = "Play 2 wins!⚑"
}