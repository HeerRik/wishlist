import type { QueryResult } from '@vercel/postgres'
import type { SQLWishlistItem } from '@/types/sql/wishlist'
import { sql } from '@vercel/postgres'

export const FETCH_WISHLIST_ITEMS = async ({
    wishlistId
}: {
    wishlistId: number;
}): Promise<QueryResult<SQLWishlistItem>> => sql`
    SELECT
        id,
        name,
        code,
        image,
        yoinkable,
        short_description
    FROM
        items
    WHERE
        id IN(
            SELECT
                item_id
            FROM
                wishlist_items
            WHERE
                wishlist_id = ${wishlistId}
        )
`

export const FETCH_ITEM_YOINK = ({
    itemId
}: {
    itemId: number;
}): Promise<QueryResult<{is_yoinked: boolean}>> => sql`
    SELECT
        is_yoinked
    FROM
        yoinks
    WHERE
        item_id = ${itemId}
`

export const FETCH_WISHLIST_ITEMS_JOINED = ({
    wishlistCode,
    limit = 1000,
    offset = 0,
}: {
    wishlistCode: string;
    limit?: number;
    offset?: number;
}): Promise<QueryResult<SQLWishlistItem>> => sql`
    SELECT
        i.id AS id,
        i.name AS name,
        i.code AS code,
        i.image AS image,
        i.short_description AS short_description,
        i.yoinkable AS yoinkable,
        y.is_yoinked AS is_yoinked
    FROM
        wishlists AS w
        RIGHT JOIN wishlist_items AS wi ON
           wi.wishlist_id = w.id
        LEFT JOIN items AS i ON
            wi.item_id = i.id
        LEFT JOIN yoinks AS y ON 
            i.id = y.item_id
    WHERE
        w.code = ${wishlistCode}
    LIMIT ${limit}
    OFFSET ${offset};
`

export const FETCH_ITEM_BY_CODE = ({
    itemCode,
}: {
    itemCode: string;
}): Promise<QueryResult<SQLWishlistItem>> => sql`
    SELECT
        i.id AS id,
        i.name AS name,
        i.code AS code,
        i.image AS image,
        i.short_description AS short_description,
        i.description AS description,
        i.yoinkable AS yoinkable,
        y.is_yoinked AS is_yoinked
    FROM
        items AS i
        LEFT JOIN yoinks AS y ON 
            i.id = y.item_id
    WHERE
        i.code = ${itemCode}
    LIMIT 1;
`

export const FETCH_ITEM_BY_ID = ({
    itemId,
}: {
    itemId: number;
}): Promise<QueryResult<SQLWishlistItem>> => sql`
    SELECT
        i.id AS id,
        i.name AS name,
        i.code AS code,
        i.image AS image,
        i.short_description AS short_description,
        i.description AS description,
        i.yoinkable AS yoinkable,
        y.is_yoinked AS is_yoinked
    FROM
        items AS i
        LEFT JOIN yoinks AS y ON 
            i.id = y.item_id
    WHERE
        i.id = ${itemId}
    LIMIT 1;
`