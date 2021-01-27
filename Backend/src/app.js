const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');
const morgan = require('morgan')
const { port } = require('./config');

const app = express();

app.set('port', port);

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors());

app.use(require('./routes/index.routes'))

module.exports = app;