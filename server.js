const express = require('express');
const logger = require('morgan');
const app = express();
const bodyParser = require('body-parser');

// Log requests to the console
app.use(logger('dev'));

// configure bodyParser()
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('*', (req, res) => res.status(200).send({
  message: 'Mwaramutse Js ninja.',
}));

module.exports = app;
