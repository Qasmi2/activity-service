

module.exports = {

        database : {
            
            host: process.env.database_host || '127.0.0.1',
            port: process.env.PORT || 5432,
            username: process.env.database_username || 'server' ,
            password: process.env.database_password || 'server',
            database: process.env.database || 'school_register',
        },
        // local = {
        //     user: 'postgres', //this is the db user credential
        //     database: 'school_register',
        //     password: 'hook',
        //     port: 5432,
        //     max: 10, // max number of clients in the pool
        //     idleTimeoutMillis: 30000,
        //   },
}