const express = require('express');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
const { pool } = require('../../database/dbconnector');
const bodyParser = require('body-parser');

    /**
     * 
     * @param { database connection }
     * @param { activity Object }
     * @retrun {boolean }
     */

    exports.createAcitity = (req,res)=>{
       

        pool.connect((err,client,done)=>{

            const query = 'INSERT INTO activity(title,description,location,price,address,city,country,link,longitude,latitude,user_id,start_time,end_time,start_date,end_date,timezone,cover,picture,location_id,owner_id,owner_name,owner_picture,capacity,category,currency,source,event_id,added_date,is_active,review_assigned_to,service_originated_from,company)'+
            'VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23,$24,$25,$26,$27,$28,$29,$30,$31,$32)';
             
            const values = [req.title,req.description,req.location,req.price,req.address,req.city,req.country,req.link,req.longitude,req.latitude,req.user_id,req.start_time,
                req.end_time,req.start_date,req.end_date,req.timezone,req.cover,req.picture,req.location_id,req.owner_id,req.owner_name,req.owner_picture,req.capacity,req.category,
                req.currency,req.source,req.event_id,req.added_date,req.is_active,req.review_assigned_to,req.service_originated_from,req.company];
        
            client.query(query, values, (error, result) => {
                done();
                if (error) {
                    res.status(400).json({error});
                }
                res.status(202).send({
                    status: 'SUccessful',
                    result: result.rows[0],
                });
            });
        });

    };


    /**
     * @param {database connection }
     * @param { }
     * @returns {list of activities }
     */

     exports.getActivities = (req,res)=>{

        pool.connect((err,client,done)=>{
            const query = 'SELECT * FROM activity';
            client.query(query, (error, result) => {
                done();
                if (error) {
                  res.status(400).json({error})
                } 
                if(result.rows < '1') {
                    res.status(404).send({
                    status: 'Failed',
                    message: 'No activity information found',
                  });
                } else {
                    res.status(200).send({
                    status: 'Successful',
                    message: 'activitys Information retrieved',
                    activitys: result.rows,
                  });
                }
            });
        });
     };


    /**
     * @param {database connection }
     * @param { id }
     * @returns {Activitie Detail  }
     */

     exports.getActivityDetail = (id)=> {

        pool.connect((err, client, done) => {
            const id = req.params.id;
            const query = `SELECT * FROM activity where id=${id}`;
            client.query(query, (error, result) => {
              done();
              if (error) {
                res.status(400).json({error})
              } 
              if(result.rows < '1') {
                    res.status(404).send({
                    status: 'Failed',
                    message: 'No activity information found',
                });
              } else {
                res.status(200).send({
                    status: 'Successful',
                    message: 'activitys Information retrieved',
                    activitys: result.rows,
                });
              }
            });
        });
     }

    /**
     * @param {database connection }
     * @param { id }
     * @returns {Activitie update  }
     */

    exports.updateActivity = (id)=>{

        pool.connect((err,client,done)=>{

            const query = `UPDATE activity set title=$req.title,description=$req.description,location=$req.location,price=$req.price,address=$req.address,city=$req.city,country=$req.country,link=$req.link,longitude=$req.longitude,latitude=$req.longitude,user_id=$req.user_id,start_time=$req.start_time,end_time=$req.end_time,start_date=$req.start_date,end_date=$req.end_date,timezone=$req.timezone,cover=$req.cover,picture=$req.picture,location_id=$req.location_id,owner_id=$req.owner_id,owner_name=$req.owner_name,owner_picture=$req.owner_picture,
            capacity=$req.capacity,category=$req.category,currency=$req.currency,source=$req.source,event_id=$req.event_id,added_date=$req.added_date,is_active=$req.is_active,
            review_assigned_to=$req.review_assigned_to,service_originated_from=$req.service_originated_from,company=$req.company where id=${id}`
        
            client.query(query, values, (error, result) => {
                done();
                if (error) {
                    res.status(400).json({error});
                }
                res.status(202).send({
                    status: 'SUccessful',
                    result: result.rows[0],
                });
            });
        });
    }

    /**
     * @param {database connection }
     * @param { id }
     * @returns {Activitie delete  }
     */

     exports.deleteActivity = (id)=>{

        pool.connect((error, client, done) => {
            const id = req.params.id;
            const query = `DELETE FROM activity where id=${id}`;
            client.query(query, (error, result) => {
                done();
                if (error) {
                     res.status(400).json({error})
                } 
                else {
                    res.status(200).send({
                    status: 'Successful',
                    message: 'Activity deleted',
                    students: result.rows,
                });
                }
            });
        });
    }