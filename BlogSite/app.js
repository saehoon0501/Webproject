//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");

const homeStartingContent = "Hi, I'm Saehoon, welcome to my blog! Currently majoring mechanical engineering and set a dream to become a programmer.";
const aboutContent = "Junior year in Konkuk University, lives in Seoul. I like traveling and the best place i've been was Barcelona, Spain. Too bad that i can't travel for now because of Covid-19.";
const contactContent = "Email me : saehoon0501@gmail.com";

const app = express();

let posts = [];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"));

app.get("/",function(req,res){
  res.render("home", {homeStartingContent:homeStartingContent, post:posts});
})

app.get("/about",function(req,res){
  res.render("about",{aboutContent:aboutContent});
})

app.get("/contact",function(req,res){
  res.render("contact",{contactContent:contactContent});
})

app.get("/compose", function(req,res){
  res.render("compose")
})

app.get("/posts/:topic", function(req,res){
  const reqTitle = _.lowerCase(req.params.topic);

  posts.forEach(function(post){
    const storedTItle = post.title;
    if(_.lowerCase(storedTItle) === reqTitle){
      res.render("post", {title : post.title, content:post.content});
    }
  })
})

app.post("/compose", function(req,res){

  const post = {
    title : req.body.postTitle,
    content : req.body.postBody
  };

  posts.push(post);

  res.redirect("/");

})

app.post("/", function(req,res){
  res.redirect("/compose");
})

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
