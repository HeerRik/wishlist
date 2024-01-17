import { sql } from '@vercel/postgres'
import { QueryResult } from '@vercel/postgres'
import { SQLWishlistItem } from '@/types/sql/wishlist';

export const INSERT_ITEM = ({
    name,
    code,
    image,
    short_description,
    description,
    yoinkable
}: Omit<SQLWishlistItem, 'id' | 'is_yoinked'>): Promise<QueryResult<{id: number}>> => sql`
    INSERT INTO items
        (name, code, image, short_description, description, yoinkable)
    VALUES
        (${name}, ${code}, ${image}, ${short_description}, ${description}, true)
        RETURNING id
`

export const ADD_TO_WISHLIST = ({
    wishlistId,
    itemId
}: {
    wishlistId: number;
    itemId: number;
}) => sql`
    INSERT INTO wishlist_items
        (wishlist_id, item_id)
    VALUES
        (${wishlistId}, ${itemId})
`

export const YOINK_ITEM = ({
    itemId,
    yoinker
}: {
    itemId: number;
    yoinker: string;
}) => sql`
    INSERT INTO yoinks
        (item_id, yoinker, is_yoinked)
    VALUES
        (${itemId}, ${yoinker}, true)
`