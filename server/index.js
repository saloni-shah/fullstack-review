
var https = require("https");
var express = require('express');
var helpers = require('./helpers');
var Repo = require('../database');

var app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos/import', function (req, res) {
  var data = '';
  req.on('data',function(chunk){
    data += chunk;
  });
  req.on('end',function() {
    data = JSON.parse(data);
    helpers.fetchGithubRepos(data, function(error,repos){
      if (error) throw error; 
      helpers.insertIntoDB(repos, function(error,message){
        if (error) throw error; 
        res.end();
      });
    });
  });
});

app.get('/repos', function (req, res) {
  Repo.find().limit(5).sort({_id: -1}).exec(function(err,records){
    if (err) throw err; 
    res.send(records);
  });
});

var port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

