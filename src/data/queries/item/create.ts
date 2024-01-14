import { sql } from '@vercel/postgres'
import { WishlistItem } from '@/types/wishlist';

export const INSERT_ITEM = ({
    name,
    code,
    image,
    shortDescription,
    description
}: Omit<WishlistItem, 'id' | 'isYoinked'>) => sql`
    INSERT INTO items
        (name, code, image, short_description, description)
    VALUES
        (${name}, ${code}, ${image}, ${shortDescription}, ${description})
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
        (item_id, yoinker)
    VALUES
        (${itemId}, ${yoinker})
`