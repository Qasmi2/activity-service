

module.exports = {

        database : {
            
            host: process.env.database_host || '127.0.0.1',
            port: process.env.PORT || 5432,
            username: process.env.database_username || 'server' ,
            password: process.env.database_password || 'server',
            database: process.env.database || 'youcan',
        },
        
        databaseRemote : {
            dialect: process.env.database_dialect || 'postgres',
            host: process.env.database_host || 'youcav-db.cnfabpkcjfhv.us-east-1.rds.amazonaws.com' ,
            username: process.env.database_username || 'postgres' ,
            password: process.env.database_password || 'Qwerty12',
            database: process.env.database || 'youcan',
            schema: process.env.schema || 'activityservice',
            elasticsearch_host: process.env.elasticsearch || 'http://172.17.0.1:9200'
        },
 
}