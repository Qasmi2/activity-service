let { ActivityModel }  = require('../domain/index');
let ActivityRepository  = require('../infrastructure/repositories/activity')


class ActivityController{

    /**
     * Add activty 
     * @param {Activity_body} 
     * @retrun <boolean>
     */

    addActivity(body){
       
        console.log("controller");
        let model = new ActivityModel(body);
        console.log(model);
        let res = ActivityRepository.createAcitity(model)
        return res;
        
       

    }

}

module.exports = ActivityController ;
