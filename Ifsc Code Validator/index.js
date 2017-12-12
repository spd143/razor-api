var express = require('express');
var app = express();
var bodyParser = require('body-parser');
//app.use(express,static(__dirname + "/public"))
app.use(express.static(require('path').resolve(__dirname + "/public")));
app.use(bodyParser.json());
var url = require('url');

const request = require('request');

app.get('/node',function(req,res){

  
  var queryData = url.parse(req.url,true).query;
  console.log(queryData);
  //res.send('index.html',);
  
  var data = [];
  var code = queryData.code;
  
  request('https://ifsc.razorpay.com/'+code, { json: true }, (err, response, body) => {
    if (err) { return console.log(err); }
    //console.log(body.url);
    data = body;
    console.log(body);
    res.json(body);
    //res.write(data);
    //console.log(body.explanation);no
  });

  
  //res.send(data);

});


	
// const request = require('request');

// var data = [];
// var code = "KKBK0001363";

// request('https://ifsc.razorpay.com/'+code, { json: true }, (err, res, body) => {
//   if (err) { return console.log(err); }
//   //console.log(body.url);
//   data = body;
//   console.log(body);
//   res.send(data);
//   //console.log(body.explanation);
// });


app.get('/getDetails',function(req,res){
	console.log("I received a GET request");	
	res.json(data);
});

app.listen(3000);

/*var http = require('http');

http.createServer(function(req,res){
	res.writeHead(200,{'Content-Type':'text/plain'});
	res.end('Hello World\n');
}).listen(3000,'192.168.0.34');*/

console.log('Server running on port 3000');