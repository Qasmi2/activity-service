const express = require('express');
var router = express.Router();

const Activity = require('../application/activity_controller');
const activity = new Activity();

/**
 * Route POST requrest 
 * @param { /api/activity-service/add_activity, body }
 * @return { boolean }
 * 
 */

router.post('/add_activity',(req,res)=>{
    let body = req.body;
    
    let re = activity.addActivity(body)
    res.json({"success":true});

});

/**
 * Route GET request 
 * @param { /api/activity-service/get_activity } 
 * @return { boolean }
 * 
 */

router.get('/get_activity',(req,res)=>{
    let response = activity.getActivities();
    res.json({"success":response});
});

/**
 * Route GET request 
 * @param { /api/activity-service/get_activity_dettail/:id } 
 * @return { boolean }
 * 
 */
 router.get('/get_activity_detail/:id',(req,res)=>{
    const id = req.params.id;
    let response = activity.getActivityDetail(id);
    res.json({"success":response});
 });


 /**
 * Route UPDATErequest 
 * @param { /api/activity-service/update_activity/:id } 
 * @return { boolean }
 * 
 */
router.get('/update_activity/:id',(req,res)=>{
    const id = req.params.id;
    const body = req.body;
    let response = activity.updateActivity(id,body);
    res.json({"success":response});
 });



module.exports = router;


