var express = require('express');
var request = require('request');
var app = express();

var request_options = {
  url: 'https://www.pollen.com/api/forecast/current/pollen/10011',
  headers: {
    'Referer': 'https://www.pollen.com/forecast/current/pollen/10011'
  }
};

app.get('/', function(req, res) {
  request(request_options, function(error, response, body) {
    if (error) {
      console.log('Error with pollen request:', error);
    } else {
      res.send(body);
    }
  });
});

app.listen(3000, null);

