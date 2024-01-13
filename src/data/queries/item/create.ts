import { sql } from '@vercel/postgres'

export const INSERT_ITEM = ({
    name,
    code,
    image,
    shortDescription,
    description
}) => sql`
    INSERT INTO items
        (name, code, image, short_description, description)
    VALUES
        (${name}, ${code}, ${image}, ${shortDescription}, ${description})
`

export const ADD_TO_WISHLIST = ({
    wishlistId,
    itemId
}) => sql`
    INSERT INTO wishlist_items
        (wishlist_id, item_id)
    VALUES
        (${wishlistId}, ${itemId})
`

export const YOINK_ITEM = ({
    itemId,
    yoinker
}) => sql`
    INSERT INTO yoinks
        (item_id, yoinker)
    VALUES
        (${itemId}, ${yoinker})
`