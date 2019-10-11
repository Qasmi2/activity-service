let { ActivityClassModel }  = require('../domain/Models/activity');
module.exports = class ActivityController{

    /**
     * Add activty 
     * @param {Activity_body} 
     * @retrun <boolean>
     */
    addActivity(body){
        console.log("body controller",body);
        let activity = new ActivityClassModel(body);        
    }


}
