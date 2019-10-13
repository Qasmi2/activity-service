
const ActivityTable = ` CREATE TABLE IF NOT EXISTS
    Activity(
        id bigserial PRIMARY KEY,
        title text,
        description text,
        location character varying(255),
        price character varying(255),
        address character varying(255),
        city character varying(255),
        country character varying(255),
        link character varying(255),
        longitude character varying(255),
        latitude character varying(255),
        user_id character varying(255),
        start_time character varying(255),
        end_time character varying(255),
        start_date date,
        end_date date,
        timezone character varying(255),
        cover text,
        picture text,
        location_id character varying(255),
        owner_id character varying(255),
        owner_name character varying(255),
        capacity character varying(255),
        category character varying(255),
        company character varying(255),
        owner_picture character varying(255),
        added_date timestamp without time zone DEFAULT now(),
        source character varying(255),
        currency character varying(255),
        event_id text,
        is_active boolean DEFAULT false,
        review_assigned_to text,
        service_originated_from text
    )` ;

    module.exports = {
        ActivityTable,
    }