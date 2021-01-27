const { Pool } = require('pg');
const { database } = require('./config');
const { promisify } = require('util');

const pool = new Pool(database);

pool.connect((err, client, release) => {

    if (err) {
        return console.error('Error acquiring client', err.stack)
    }
    client.query('SELECT NOW()', (err, result) => {
        release()
        if (err) {
            return console.error('Error executing query', err.stack)
        }
        console.log(result.rows)
    });

});

pool.query = promisify(pool.query);

module.exports = pool;