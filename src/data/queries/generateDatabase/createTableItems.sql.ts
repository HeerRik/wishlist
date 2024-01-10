import { sql } from '@vercel/postgres';

export const CREATE_TABLE_ITEMS = () => sql`
    CREATE TABLE IF NOT EXISTS items ( 
        id int NOT NULL,
        code varchar(255) NOT NULL UNIQUE,
        name varchar(255) NOT NULL,
        short_description varchar(255),
        description TEXT,
        image varchar(255),
        PRIMARY KEY (id)
    );
`