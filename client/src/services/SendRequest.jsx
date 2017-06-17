import $ from 'jquery';
var SendRequest = (term) => {
  $.ajax({
    url: 'http://localhost:1128/repos/import',
    type: 'POST',
    contentType: "application/json",
    dataType: "json",
    data: JSON.stringify({username: term}),
    success: function(data) {
      console.log('sent request with serach value..');
    },
    error: function (data) {
      console.error('errorrrrr');
    }
  });
}
module.exports = SendRequest;




