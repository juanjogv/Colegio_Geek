const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer')
var cors = require('cors');
const morgan = require('morgan')
const { port } = require('./config');

const app = express();
// app.use(cors({origin: 'http://localhost:3000',credentials: true})); 
app.use(cors({origin: '*'}));

const multerMid = multer({
    storage: multer.memoryStorage(),
    limits: {
        fileSize: 5 * 1024 * 1024,
    },
})

app.set('port', port);



app.use(express.json());
app.use(morgan('dev'));
app.use(multerMid.single('file'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors());

app.use(require('./routes/insertInfo.routes'))
app.use(require('./routes/index.routes'));
app.use(require('./routes/autentication.routes'));
app.use(require('./routes/mailer.routes'))
app.use(require('./routes/uploadImg.routes'))

module.exports = app;
