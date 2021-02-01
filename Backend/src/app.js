const express = require('express');
// const bodyParser = require('body-parser');
var cors = require('cors');
const morgan = require('morgan')
const { port } = require('./config');

const app = express();

app.set('port', port);

// app.use(cors({origin: '*'}));
app.use(express.json());
app.use(morgan('dev'));

app.use(cors({origin: 'http://localhost:3000',credentials: true})); 

app.use(require('./routes/index.routes'));
app.use(require('./routes/autentication.routes'));
app.use(require('./routes/mailer.routes'))

module.exports = app;
