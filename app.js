var express = require('express')
var cookieParser = require('cookie-parser');

var activityRoutes = './src/interface/activityRoutes'
// create express app @ express app just for testing 
const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

require(activityRoutes)(app);

// not found 
app.use((req,res)=>{
    res.status(404).send({url:req.originalUrl + 'Not found'})
});


const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Activity microservice listening on ${PORT} port!`)
});

module.exports = app;
