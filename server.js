// npm packages
var express = require('express')
var bodyparser = require('body-parser')
var path = require('path')
var morgan = require("morgan");

// new express app
var app = express()



// middleware
app.use(express.static(path.join(__dirname, 'public/views')))
app.use(bodyparser.urlencoded({extended: true}))
app.use(bodyparser.json())
app.use(morgan("tiny"));

// your code here...
// basic info
require("./routes/basicroutes")(app);

// htlm file
require("./routes/htmlroutes")(app);

// data fiel
require("./routes/dataroutes")(app);

var userArr = [];
app.get("/getContact", function(req, res){
  res.json(userArr); // send userArr back to user - front end
})

// app.get("/contact", function(req, res){
//   res.redirect("public/views/contact.html", {root: __dirname});
// })

app.get("/contact", function(req, res){
  res.redirect("contact.html");
})

app.post("/posty", function(req, res){
  console.log(req.body);
  res.send("posty: this is from server");
})

app.post("/user", function(req, res){
  userArr.push(req.body);
  //console.log(req.body)
  res.send(true);
  // res.send("server got updated");//
})

var PORT = process.env.PORT || 3000
// listening port
app.listen(PORT, function (e) {
  if (e) throw e
})
