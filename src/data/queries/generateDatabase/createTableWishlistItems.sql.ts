import { sql } from '@vercel/postgres';

export const CREATE_TABLE_WISHLIST_ITEMS = () => sql`
    CREATE TABLE IF NOT EXISTS wishlist_items ( 
        id SERIAL PRIMARY KEY,
        wishlist_id integer,
        item_id integer
    );
`