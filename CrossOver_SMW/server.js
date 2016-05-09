var fs = require("fs");
var ejs = require("ejs");
var path = require('path');
var http =  require('http');

//var routes= require('./routes');



// include the express module using require statement
var express = require("express");

// Imoportant :  once a included you can invoke it as a function which will return an Express server instance.
// this application instance will allow you to configure and add routes.	

var app =  express();

app.set('port', 3000);

app.set('views', __dirname + '/app');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(express.static(path.join(__dirname, 'app')));
app.use(express.static(path.join(__dirname, 'node_modules')));


app.use('/bower_components',  express.static(__dirname + '/bower_components'));

//configuring paths
app.get('/', require('./routes/index.js').index);



// user login request handle
app.get('/user_login', function(req, res){

 var user_name = req.query.user_name;
 var pass_word =req.query.pass_word

  var options = {
    host : 'localhost',
    path : '/login?username='+user_name+'&password='+pass_word,
    port : 8080,
    method : 'GET',
  }

  var request = http.request(options, function(response){
	    var body = ""
	    response.on('data', function(data) {
	      body += data;
	    });
	    response.on('end', function() {
	      res.set('Access-Control-Allow-Origin', '*');
	      res.send(JSON.parse(body));
	      //res.send("palaweni post call eka doo");
	    });
	  });
   request.on('error', function(e) {
	    console.log('Problem with request: ' + e.message);
   });
   request.end();
});


// sales man data request handle

app.get('/sales-man-data', function(req, res){

var session_id = req.query.session_id;
console.log(session_id);
 var options = {
    host : 'localhost',
    path : '/salesmandata?sessionid='+session_id,
    port : 8080,
    method : 'GET',
  }

  var request = http.request(options, function(response){
	    var body = ""
	    response.on('data', function(data) {
	      body += data;
	    });
	    response.on('end', function() {
	      res.set('Access-Control-Allow-Origin', '*');
	      res.send(JSON.parse(body));
	      //res.send("palaweni post call eka doo");
	    });
	  });
   request.on('error', function(e) {
	    console.log('Problem with request: ' + e.message);
   });
   request.end();
});

// Sales total per monthe | last year data
app.get('/last-year-data', function(req, res){

var session_id = req.query.session_id;

 var options = {
    host : 'localhost',
    path : '/lastyeardata?sessionid='+session_id,
    port : 8080,
    method : 'GET',
  }

  var request = http.request(options, function(response){
	    var body = ""
	    response.on('data', function(data) {
	      body += data;
	    });
	    response.on('end', function() {
	      res.set('Access-Control-Allow-Origin', '*');
	      res.send(JSON.parse(body));
	      //res.send("palaweni post call eka doo");
	    });
	  });
   request.on('error', function(e) {
	    console.log('Problem with request: ' + e.message);
   });
   request.end();
});


//  Top sales Order 
app.get('/top-sales-orders', function(req, res){

var session_id = req.query.session_id;

 var options = {
    host : 'localhost',
    path : '/topsalesorders?sessionid='+session_id,
    port : 8080,
    method : 'GET',
  }

  var request = http.request(options, function(response){
	    var body = ""
	    response.on('data', function(data) {
	      body += data;
	    });
	    response.on('end', function() {
	      res.set('Access-Control-Allow-Origin', '*');
	      res.send(JSON.parse(body));
	      //res.send("palaweni post call eka doo");
	    });
	  });
   request.on('error', function(e) {
	    console.log('Problem with request: ' + e.message);
   });
   request.end();
});

// Top 5 Sales Man
app.get('/top-sales-men', function(req, res){

var session_id = req.query.session_id;

 var options = {
    host : 'localhost',
    path : '/topsalesmen?sessionid='+session_id,
    port : 8080,
    method : 'GET',
  }

  var request = http.request(options, function(response){
	    var body = ""
	    response.on('data', function(data) {
	      body += data;
	    });
	    response.on('end', function() {
	      res.set('Access-Control-Allow-Origin', '*');
	      res.send(JSON.parse(body));
	      //res.send("palaweni post call eka doo");
	    });
	  });
   request.on('error', function(e) {
	    console.log('Problem with request: ' + e.message);
   });
   request.end();
});


//start server
var server = http.Server(app);

server.listen(app.get('port'), function(){
// log.info('Express server listening on port ' + app.get('port'));
 
});



// create REST Api 
