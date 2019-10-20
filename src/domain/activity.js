class ActivityModel {
    
    constructor(obj){ 
       
        if(obj.title)
            this.title = obj.title;    
        if(obj.description)
            this.description = obj.description;
        if(obj.location)
            this.location = obj.location;
        if(obj.price)
            this.price = obj.price;
        if(obj.address)        
            this.address = obj.address;
        if(obj.city)     
            this.city = obj.city;
        if(obj.country)
            this.country = obj.country;
        if(obj.start_time)
            this.start_time = obj.start_time;
        if(obj.end_time)
            this.end_time = obj.end_time;
        if(obj.start_date)
            this.start_date = obj.start_date;
        if(obj.end_date)
            this.end_date = obj.end_date;
        if(obj.picture)
            this.picture = obj.picture;     
       
    }
}


module.exports = ActivityModel ;