// Database connection 
const createActivityTable = require('./models/activity_defination');
const { Pool } = require('pg');
const options = require('../../config')

const config = {
    
    user: options.database.username,
    database : options.database.database,
    password : options.database.password,
    port : options.database.port,
    schema : options.database.schema,
    idleTimeoutMillis: 30000,
    host : options.host,

}

const pool = new Pool(config);
pool.on('connect')
    .then((db)=>{
        Console.log('Database to the connected');
    })
    .catch((err)=>{
        console.log('Database connection Erro',err)
    });

/**
 * create Tables if not exist  
 */

pool.query(createActivityTable)
    .then((res)=>{
        console.log("Activity Table Creation ");
    })
    .catch((err)=>{
        console.log("Error Creation Activity Table ",err);
    });


module.exports = {
    pool
};

