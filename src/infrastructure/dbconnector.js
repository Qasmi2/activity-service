// Database connection 

require('make-runnable');
const pg = require('pg');
const options = require('../../config')

const config = {
    
    user: options.database.username,
    database : options.database.database,
    password : options.database.password,
    port : options.database.port,
    idleTimeoutMillis: 30000,
    host : options.host,

}

const pool = new pg.Pool(config);
pool.on('connect', () => {
    console.log('connected to the Database');
});

module.exports = {
    pool
};

