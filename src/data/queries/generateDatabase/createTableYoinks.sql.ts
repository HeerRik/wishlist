import { sql } from '@vercel/postgres';

export const CREATE_TABLE_YOINKS = () => sql`
    CREATE TABLE IF NOT EXISTS yoinks ( 
        id SERIAL PRIMARY KEY,
        yoinker varchar(255) NOT NULL,
        item_id integer NOT NULL,
        is_yoinked BOOLEAN NOT NULL
    );
`