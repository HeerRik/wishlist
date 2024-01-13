import { sql } from '@vercel/postgres'

export const INSERT_WISHLIST = ({
    name,
    code,
}) => sql`
    INSERT INTO wishlists
        (name, code)
    VALUES
        (${name}, ${code})
`