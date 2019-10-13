let { ActivityModel }   = require('../domain/index');
let ActivityRepository  = require('../infrastructure/repositories/activity')


class ActivityController{

    /**
     * Add activty 
     * @param {Activity_body} 
     * @return {boolean}
     */

    addActivity(body){
       
        console.log("controller");
        let model = new ActivityModel(body);
        // let title = model.location;
        // console.log("testing ",title);
        let response = ActivityRepository.createAcitity(model)
        return response;

    }

    /**
     * get activities 
     * @param {}
     * @return {list of activities}
     */
    getActivities(){

        let response = ActivityRepository.getActivities();
        console.log(`\n\n constroller`,response);
        return response;
    }


    /**
     * get activity by ID
     * @param { activity_id }
     * @return { activity detail }
     * 
     */
    getActivityDetail(id){
        // underdevelopment 
        let response = ActivityRepository.getActivityDetail(id);
        console.log(`\n constroller ,${response}`);
        return response;

    }

    /**
     * update activity by ID
     * @param { id,body } 
     * @returns { boolean }
     */
    updateActivity(body,id){
        let model = new ActivityModel(body);
        let presponse = ActivityRepository.updateActivity(model,id);
        return presponse;
    }

    /**
     * delete activity by ID
     * @param { activity_id }
     * @param { activity_detail }
     */
    deleteActivity(id){
        let response = ActivityRepository.deleteActivity(id);
        return response;
    }

}

module.exports = ActivityController ;
