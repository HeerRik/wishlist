import { sql } from '@vercel/postgres';

export const CREATE_TABLE_YOINKS = () => sql`
    CREATE TABLE IF NOT EXISTS yoinks ( 
        id int NOT NULL,
        yoinker varchar(255) NOT NULL,
        item_id varchar(255) NOT NULL,
        PRIMARY KEY (id)
    );
`