import type { QueryResult } from '@vercel/postgres'
import { sql } from '@vercel/postgres'

export const UNYOINK = ({
    itemId,
    yoinker,
}: {
    itemId: number;
    yoinker: string;
}): Promise<QueryResult> => sql`
    DELETE FROM 
        yoinks
    WHERE
        item_id = ${itemId}
        AND yoinker = ${yoinker}
`

export const DELETE_ITEM = ({
    itemId,
}: {
    itemId: number;
}): Promise<QueryResult[]> => Promise.all([
    sql`
        DELTETE FROM
            items
        WHERE
            item_id = ${itemId}
    `,
    sql`
        DELETE FROM 
            yoinks
        WHERE
            item_id = ${itemId}
    `,
    sql`
        DELETE FROM
            wishlist_items
        WHERE
            item_id = ${itemId}
    `,
])

export const REMOVE_FROM_WISHLIST = ({
    itemId,
    wishlistId,
}: {
    itemId: number;
    wishlistId: number;
}): Promise<QueryResult> => sql`
    DELETE FROM
        wishlist_items
    WHERE
        item_id = ${itemId}
        AND wishlist_id = ${wishlistId}
`