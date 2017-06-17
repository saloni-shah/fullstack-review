var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

var repoSchema = mongoose.Schema({
  // TODO: your schema here!
  username: String,
  avatar: String,
  reponame: String,
  repourl: String,
  forkurl: String
});

var Repo = mongoose.model('Repo', repoSchema);

module.exports = Repo;