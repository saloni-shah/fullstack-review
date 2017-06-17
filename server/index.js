
var https = require("https");
var express = require('express');
var helpers = require('./helpers');
var Repo = require('../database');

var app = express();

app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos/import', function (req, res) {
  // TODO
  console.log('aaaabbbbbbbbb');
  var data = '';
  req.on('data',function(chunk){
    data += chunk;
  });
  req.on('end',function() {
    data = JSON.parse(data);
    console.log(data.username);
    helpers.fetchGithubRepos(data, function(error,repos){
      if (error) throw err; 
      //console.log(repos[1]);
      repos.forEach((val,index,arr) => {
        Repo.create({ username: val.owner.login, avatar: val.owner.avatar_url, reponame: val.name, repourl: val.html_url, forkurl: val.forks_url}, function(error, doc) {
          if (error) throw err;
          console.log("data inserted into db successfully");
        });
      });
    });
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end();
  });
});

app.get('/repos', function (req, res) {
  // TODO
});

var port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

