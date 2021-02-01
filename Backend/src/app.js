const express = require('express');
<<<<<<< HEAD
// const bodyParser = require('body-parser');
=======
const bodyParser = require('body-parser');
const multer = require('multer')
>>>>>>> 22f049111846601774e63c3deaf787d60a55d801
var cors = require('cors');
const morgan = require('morgan')
const { port } = require('./config');

const app = express();

const multerMid = multer({
    storage: multer.memoryStorage(),
    limits: {
        fileSize: 5 * 1024 * 1024,
    },
})

app.set('port', port);

// app.use(cors({origin: '*'}));
app.use(express.json());
app.use(morgan('dev'));
<<<<<<< HEAD

app.use(cors({origin: 'http://localhost:3000',credentials: true})); 
=======
app.use(multerMid.single('file'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors());
>>>>>>> 22f049111846601774e63c3deaf787d60a55d801

app.use(require('./routes/index.routes'));
app.use(require('./routes/autentication.routes'));
app.use(require('./routes/mailer.routes'))
app.use(require('./routes/uploadImg.routes'))

module.exports = app;
