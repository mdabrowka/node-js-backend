var express = require('express');
var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false })

server.use(express.json());
server.use(express.static('public'));

server.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

const questions = [{question_1: 'Do you like dogs?'}, {question_2: 'Do you speak Mandarin?'} ]

server.get('/api/get-questions', (req, res) => {
  res.send(questions);
});


app.listen(3000, function () {
  console.log('App running on port ' + this.address().port);
});