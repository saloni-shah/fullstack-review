var request = require('request');
var https = require("https");
var express = require('express');
module.exports.fetchGithubRepos = function(data,cb){
  var options = {
    url:'https://api.github.com/users/'+ data.username +'/repos?access_token=733dd976ba71ad3f8ae7f809eea9c3dc1e12dc75',

    method: 'GET',

    headers: {'user-agent':'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.0)'}
  };
   
  function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
      var info = JSON.parse(body);
      cb(null,info);
      console.log(response.statusCode);
    } else {
      cb(error);
    }
  }
  request(options, callback);
}