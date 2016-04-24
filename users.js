var fs = require('fs');
var _ = require('lodash');
var uuid = require('uuid');

var DB_FILE_PATH = 'db/users.json';

module.exports = {
  getUsers: function() {
    return JSON.parse(fs.readFileSync(DB_FILE_PATH, 'utf8'));
  },

  getUser: function(userId) {
    var users = JSON.parse(fs.readFileSync(DB_FILE_PATH, 'utf8'));

    return _.find(users, { id: userId });
  },

  postUser: function(userData) {
    var users = JSON.parse(fs.readFileSync(DB_FILE_PATH, 'utf8'));

    userData.id = uuid.v1();
    users.push(userData);

    fs.writeFileSync(DB_FILE_PATH, JSON.stringify(users) , 'utf8');

    return userData;
  },

  putUser: function(userId, userData) {
    var users = JSON.parse(fs.readFileSync(DB_FILE_PATH, 'utf8'));
    var user = _.find(users, { id: userId });

    _.merge(user, userData);

    fs.writeFileSync(DB_FILE_PATH, JSON.stringify(users) , 'utf8');

    return user;
  },

  deleteUser: function(userId) {
    var users = JSON.parse(fs.readFileSync(DB_FILE_PATH, 'utf8'));
    var usersUpdated = _.reject(users, { id: userId });

    fs.writeFileSync(DB_FILE_PATH, JSON.stringify(usersUpdated) , 'utf8');

    return usersUpdated;
  }
}
