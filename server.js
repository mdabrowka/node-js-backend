var express = require('express');
var server = express();
var bodyParser = require('body-parser');
const questions = require('./models/questions')

var urlencodedParser = bodyParser.urlencoded({ extended: false })

server.use(express.json());

server.use(express.static('public'));

server.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

server.get('/api/get-questions', (req, res) => {
  res.send(questions);
});

const emails = [];

server.post('/api/subscribe', urlencodedParser, (req, res) => {
  if (!req.body.email || req.body.name.length < 5 ) {
      res.status(400).send('Email is required and should be minimum 5 characters');
      return;
    }
  console.log('logging request body', req.body);
  const email = {
    id: emails.length + 1,
    email: req.body.email
  };
  emails.push(email);
  res.send(email);
});

const port = process.env.PORT || 5000;

server.listen(port, function() {
  console.log(`App running on port ${port}`);
});