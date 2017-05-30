var express = require('express');
var cool = require('cool-ascii-faces');

var app = express();

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
/*console.log('req received')
var io2 = require('socket.io-client');
var socket2 = io2.connect('http://73.241.218.246:8080');

var msg2 = "hello, this is satya!";
socket2.emit('foo', msg2);
*/
console.log('req complete')
	response.render('pages/index');
});

app.get('/get_pumps', function(request, response) {
	  console.log('User:', 'get pumps called');
	  response.send(cool());
	});


app.get('/cool', function(request, response) {
	  console.log('User:', 'just accessed the /dashboard page!');
	  response.send(cool());
	});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


