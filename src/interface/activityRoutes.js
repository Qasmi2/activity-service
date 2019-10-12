const express = require('express');
var router = express.Router();

const Activity = require('../application/activity_controller');
const activity = new Activity();

/** require activty Controller  */

router.post('/add_activity',(req,res)=>{
    let body = req.body;

    console.log("body ",body);
    activity.addActivity(body)
    res.json({ success: true });

});

module.exports = router;
