import { sql } from '@vercel/postgres';

export const CREATE_TABLE_WISHLIST_ITEMS = () => sql`
    CREATE TABLE IF NOT EXISTS items ( 
        id int NOT NULL,
        wishlist_id varchar(255),
        item_id varchar(255),
        PRIMARY KEY (id)
    );
`