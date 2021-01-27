const dotenv = require('dotenv');
dotenv.config();

const app = require('./app');

app.listen(app.get('port'), () => {
    console.log('Servidor en el puerto', app.get('port'));
});