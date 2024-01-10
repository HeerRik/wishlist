import { sql } from '@vercel/postgres';

export const CREATE_TABLE_WISHLISTS = () => sql`
    CREATE TABLE IF NOT EXISTS wishlists ( 
        id int NOT NULL,
        code varchar(255) NOT NULL UNIQUE,
        name varchar(255) NOT NULL,
        PRIMARY KEY (id)
    );
`