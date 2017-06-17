var request = require('request');
var https = require("https");
var express = require('express');
var Repo = require('../database');
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
    } else {
      cb(error);
    }
  }
  request(options, callback);
}

module.exports.insertIntoDB = function(repos,cb){
  repos.forEach((val,index,arr) => {
    Repo.find({repoid: val.id}, function(error,record){
      if (error) {
        cb(error);
      } 
      if(error===null && record.length===0){
        Repo.create({ username: val.owner.login, avatar: val.owner.avatar_url, reponame: val.name, repoid: val.id,repourl: val.html_url, forkurl: val.forks_url}, function(error, doc) {
          if (error) throw error;
          console.log("data inserted into db successfully");
          cb(null,"data inserted into db successfully")
        });
      } else {
        console.log("Sorry!!! this repo already exists in db..");
        cb(null,"Sorry!!! this repo already exists in db..")
      }
    });
  });
}