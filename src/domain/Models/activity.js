module.exports = class ActivityModel{
    
    // Constructor of Activity Class
    constructor(obj){ 
        
        title = obj.title,        
        description = obj.description,
        location = obj.location,
        price = obj.price,
        address = obj.address,
        city = obj.city,
        country = obj.country,
        link = obj.link,
        longitude = obj.longitude,
        latitude = obj.latitude,
        user_id = obj.user_id,
        start_time = obj.start_time,
        end_time = obj.end_time,
        start_date = obj.start_date,
        end_date = obj.end_date,
        timezone = obj.timezone,        
        cover = obj.cover, 
        picture = obj.picture,     
        location_id = obj.location_id,
        owner_id = obj.owner_id,
        owner_name = obj.owner_name,
        owner_picture = obj.owner_picture,
        capacity = obj.capacity,
        category = obj.category,
        currency = obj.currency,
        source = obj.source,
        event_id = obj.event_id,
        added_date = obj.event_date,
        review_assigned_to = obj.review_assigned_to,
        service_originated_from = obj.service_originated_from,
        company = obj.company;

    }
}