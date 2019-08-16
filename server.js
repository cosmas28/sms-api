import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';

import routes from './app/routes/index';

const app = express();

// Log requests to the console
app.use(logger('dev'));

// configure bodyParser()
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', routes);

app.get('*', (req, res) =>
  res.status(200).send({
    message: 'Mwaramutse Js ninja.',
  }),
);

export default app;
