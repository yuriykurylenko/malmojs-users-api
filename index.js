//postUser({ name: 'Yuriy Kurylenko', email: 'yuriy.kurylenko@gmail.com' });
//deleteUser('1953d6f0-0999-11e6-9de0-c3f1e8f6acbd');
//putUser('0dc37b60-0999-11e6-9e4b-094c61ce8773', { "name": "Ludmila Danilova", "email": "dalu@rabler.ru" });

var express = require('express');
var bodyParser = require('body-parser');

var users = require('./users.js');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// respond with "hello world" when a GET request is made to the homepage
app.get('/users', function(req, res) {
  res.send(users.getUsers());
});

app.get('/user/:userId', function(req, res) {
  res.send(users.getUser(req.params.userId));
});

app.post('/user', function(req, res) {
  res.send(users.postUser(req.body));
});

app.put('/user/:userId', function(req, res) {
  res.send(users.putUser(req.params.userId, req.body));
});

app.delete('/user/:userId', function(req, res) {
  res.send(users.deleteUser(req.params.userId));
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
