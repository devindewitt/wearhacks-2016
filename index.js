var express = require('express');
var app = express();
var path = require("path");

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname, "public"));

// app.use(express.static(path.join(__dirname, "public")));


app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});



app.listen(5000, function(){
  console.log('listening on *:5000');
});
