let { ActivityModel }  = require('../domain/index');

class ActivityController{

    /**
     * Add activty 
     * @param {Activity_body} 
     * @retrun <boolean>
     */

    addActivity(body){
       
        let activity_constructor = new ActivityModel(body);

    }

}

module.exports = ActivityController ;
