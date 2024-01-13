import type { QueryResult } from '@vercel/postgres';
import type { SQLWishlist } from '@/types/sql/wishlist';
import { sql } from '@vercel/postgres'

export const FETCH_WISHLISTS = ({
    limit = 100,
    offset = 0
}): Promise<QueryResult<SQLWishlist>> => sql`
    SELECT 
        id,
        name,
        code
    FROM 
        wishlists
    LIMIT ${limit}
    OFFSET ${offset};
`
export const FETCH_WISHLIST = ({
    wishlistCode
}): Promise<QueryResult<SQLWishlist>> => sql`
    SELECT 
        id,
        name,
        code
    FROM 
        wishlists
    WHERE
        code = ${wishlistCode}
    LIMIT 1;
`