
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
        start_time character varying(255),
        end_time character varying(255),
        start_date date,
        end_date date,
        picture text,
        added_date timestamp without time zone DEFAULT now(),
    )`;

    module.exports = {
        ActivityTable,
    }