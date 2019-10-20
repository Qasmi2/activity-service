const express = require('express');
var router = express.Router();

const Activity = require('../application/activity_controller');
const activity = new Activity();


//create acitivites 
router.post('/create-activity',(req,res)=>{

    let arr = req.body;
    arr = { arr } ;
    let result = activity.create_activity(arr);
    res.json({result});

});
//get all the activities 
router.get('/activities',(req,res)=>{

});
//get single activities 
router.get('/get-activity',(req,res)=>{

});
//search acitivity
router.post('/search-activity', (req,res)=>{

});
router.put('/activity',(req,res)=>{

});



module.exports = router;
