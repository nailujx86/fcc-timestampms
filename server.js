// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get("/:query", function (req, res){
  var returnObj = { unix: null, natural: null };
  var date = new Date(isNaN(req.params.query)?req.params.query:Number(req.params.query));
  if(!isNaN(date.getTime())){
    returnObj.unix = date.getTime();
    returnObj.natural = date.toDateString();
  }
  res.send(returnObj);
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});