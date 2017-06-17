import $ from 'jquery';
var SendPostRepos = (term,cb) => {
  $.ajax({
    url: 'http://localhost:1128/repos/import',
    type: 'POST',
    contentType: "application/json",
    data: JSON.stringify({username: term}),
    success: function() {
      console.log('sent request with serach value and inserted data in db..');
      cb();
    },
    error: function (error) {
      console.error(error);
    }
  });
}

var SendRequestRepos = (callback) => {
  $.ajax({
    url: 'http://localhost:1128/repos',
    type: 'GET',
    dataType: "json",
    success: function(data) {
      callback(data);
    },
    error: function (data) {
      console.error('errorrrrr2');
    }
  });
}
module.exports.SendPostRepos = SendPostRepos;
module.exports.SendRequestRepos = SendRequestRepos;




