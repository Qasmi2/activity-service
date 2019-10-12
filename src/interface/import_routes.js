let activity_routes = require('./activityRoutes');

var ImportRoutes = function(app){

    app.use('/api/activity-service',activity_routes);

}
module.exports = ImportRoutes;