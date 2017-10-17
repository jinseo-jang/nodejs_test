var express = require('express')
, http = require('http')
, app = express()
, server = http.createServer(app);

app.get('/', function (req, res) {
res.send('Hello, Docker Test');
console.log('GET/ Main page reaquested');
});

app.get('/world.html', function (req, res) {
res.send('Hello World');
console.log('GET/ html page reaquested')
});

server.listen(8888, function() {
console.log('Express server listening on port ' + server.address().port);
});
// var express = require('express');

// var app = express();

// app.get('/', function(req, res){
//     res.send('Hello from inside a container!');
// });

// app.listen(8080);