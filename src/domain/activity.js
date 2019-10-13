class ActivityClassModel{
    
    // Constructor of ActivityClassModel
    constructor(obj){ 
        
        this.title = obj.title;    
        this.description = obj.description;
        this.location = obj.location;
        this.price = obj.price;
        this.address = obj.address;
        this.city = obj.city;
        this.country = obj.country;
        this.link = obj.link;
        this.longitude = obj.longitude;
        this.latitude = obj.latitude;
        this.user_id = obj.user_id;
        this.start_time = obj.start_time;
        this.end_time = obj.end_time;
        this.start_date = obj.start_date;
        this.end_date = obj.end_date;
        this.timezone = obj.timezone;        
        this.cover = obj.cover; 
        this.picture = obj.picture;     
        this.location_id = obj.location_id;
        this.owner_id = obj.owner_id;
        this.owner_name = obj.owner_name;
        this.owner_picture = obj.owner_picture;
        this.capacity = obj.capacity;
        this.category = obj.category;
        this.currency = obj.currency;
        this.source = obj.source;
        this.event_id = obj.event_id;
        this.added_date = obj.event_date;
        this.is_active = obj.is_active;
        this.review_assigned_to = obj.review_assigned_to;
        this.service_originated_from = obj.service_originated_from;
        this.company = obj.company;

    }
}


module.exports = ActivityClassModel ;