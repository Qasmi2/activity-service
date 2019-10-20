const { ActivityModel } = require('../domain/index');
const PgUtility = require('../domain/utility/utility_pg');
//let ActivityRepository  = require('../infrastructure/repositories/activity')


class ActivityController{

    /**
     * Add activty 
     * @param {Activity_body} 
     * @retrun <boolean>
     */

    create_activity(body){
       
        const model = new ActivityModel(body.arr);
        const pgUtility = new PgUtility(model);
        const get_column = pgUtility.get_column();
        const get_value = pgUtility.get_value();
        if(get_column){
            return 
        }
        console.log("get cloumn is :--->controller ",get_column);
        console.log("get value --- >controller",get_value);
        // let res = ActivityRepository.createAcitity(model)
         return { "successful":"crate_actiivty"};
        
       

    }

}

module.exports = ActivityController ;
