

module.exports = {

        database : {
            
            host: process.env.database_host || '127.0.0.1',
            port: process.env.PORT || 5432,
            username: process.env.database_username || 'server' ,
            password: process.env.database_password || 'server',
            database: process.env.database || 'youcan',
        },
        
      
 
}
