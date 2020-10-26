var express= require("express");
var app = express();
var request = require("request");

app.set("view engine","ejs");

app.get("/",function(req,res){
  res.render("search");
});

app.get("/results",function(req,res){
    var query = req.query.search;
    console.log(query);
    var url = 'http://newsapi.org/v2/everything?' +
    'q='+query+'&' +
    'apiKey=dac2facfdf1a47a9937ffd8504581c0d'; 
  request(url,function(error, response, body){
      var status = response.statusCode;
      console.log(status);
      if(!error && response.statusCode==200){
     var data = JSON.parse(body);
     res.render("results",{data: data});
  }});
});


app.listen(5000,function(){
  console.log("App is running!");
});