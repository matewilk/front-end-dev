var http = require('http'),
    path = require('path'),
    bodyParser = require('body-parser'),
    express = require('express'),
    app = express(),
    send = require('./sendwithmailer');

    hostname = 'localhost',
    port = 3000;

app.use(bodyParser.json());

app.post('/api/send', function(req, res) {
    send(req.body, function(info){
        res.end(JSON.stringify({success: true}, null, 2));
    });
});

app.listen(port, hostname, function(err){
    if (err) {
        console.log(err);
        return;
      }
    console.log('Server running at http://'+hostname+':'+port);
});
