 const { pool } = require('../../database/dbconnector');

    exports.createAcitity = (req,res)=>{
       

        pool.connect((err,client,done)=>{

            const query = 'INSERT INTO activity(title,description,location,price,address,city,country,link,longitude,latitude,user_id,start_time,end_time,start_date,end_date,timezone,cover,picture,location_id,owner_id,owner_name,owner_picture,capacity,category,currency,source,event_id,added_date,is_active,review_assigned_to,service_originated_from,company)'+
            'VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23,$24,$25,$26,$27,$28,$29,$30,$31,$32)';
             
            const values = [req.title,req.description,req.location,req.price,req.address,req.city,req.country,req.link,req.longitude,req.latitude,req.user_id,req.start_time,
                req.end_time,req.start_date,req.end_date,req.timezone,req.cover,req.picture,req.location_id,req.owner_id,req.owner_name,req.owner_picture,req.capacity,req.category,
                req.currency,req.source,req.event_id,req.added_date,req.is_active,req.review_assigned_to,req.service_originated_from,req.company];
            
            client.query(query,values,(err,result)=>{
                res = result;
                done();
                if(err){
                    console.log("insertion erro",err);
                }
                
               console.log("successfull added ",res);
            });
        });
        pool.end();

    };
   


