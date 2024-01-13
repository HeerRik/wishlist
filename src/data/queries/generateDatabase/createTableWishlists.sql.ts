import { sql } from '@vercel/postgres';

export const CREATE_TABLE_WISHLISTS = () => sql`
    CREATE TABLE IF NOT EXISTS wishlists ( 
        id SERIAL PRIMARY KEY,
        code varchar(255) NOT NULL UNIQUE,
        name varchar(255) NOT NULL
    );
`