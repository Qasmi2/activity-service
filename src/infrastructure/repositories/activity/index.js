// const { pool } = require('../../database/dbconnector');

    exports.createAcitity = function (req,res){
        const data = req;
        console.log("database laoyer",data);

        const query = 'INSERT INTO Activity(title,description,location,price,address,city,country,link,longitude,latitude,user_id,start_time,end_time,start_date,end_date,timezone,cover,picture,location_id,owner_id,owner_name,owner_picture,capacity,category,currency,source,event_id,added_date,is_active,review_assigned_to,service_originated_from,company'+
        'VALUES($1,$2,$3,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23,$24,$25,$26,$27,@28,$29,$30,$31,$32)';
         
        // const values = []
        
    };
   


