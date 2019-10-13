// Database connection 
const createActivityTable  = require('./models/activity_defination');
require('make-runnable');
const pg = require('pg');
const options = require('../../../config');

const config = {
    
    user: options.database.username,
    database : options.database.database,
    password : options.database.password,
    port : options.database.port,
    idleTimeoutMillis: 30000,
    connectionLimit : 10,    

}

// const config = {
//     schema : options.databaseRemote.schema,
//     database: options.databaseRemote.database,
//     user:options.databaseRemote.username,
//     password : options.databaseRemote.password,
//     host:options.databaseRemote.host,
//     dialect : options.databaseRemote.dialect,

// }

const pool = new pg.Pool(config);
pool.on('connect',() => {
        console.log('Database to the connected');
    });

/**
 * create Tables if not exist  
 */

pool.query(createActivityTable.ActivityTable)
    .then((res)=>{
        console.log("Activity Table Creation ",res);
        pool.end();
    })
    .catch((err)=>{
        console.log("Error Creation Activity Table ",err);
        pool.end();
    });


module.exports = {
    pool
};

