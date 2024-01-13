import type { Wishlist } from '@/types/wishlist'
import { FETCH_WISHLIST } from '@/data/queries/wishlist/get'
import {
    FETCH_WISHLIST_ITEMS,
} from '@/data/queries/item/get'
import mapWishlist from '@/data/mappers/wishlist'

export const fetchWishlist = async (
    wishlistCode,
): Promise<Wishlist | {error: boolean}> => {
    try {
        const wishlist = await FETCH_WISHLIST({wishlistCode});
        const items = await FETCH_WISHLIST_ITEMS({wishlistId: wishlist.rows[0].id})
        // const [items, yoinks] = await Promise.all([
        //     FETCH_WISHLIST(queryParam),
        //     FETCH_WISHLIST_ITEMS(queryParam),
        // ]);

        if (wishlist.rowCount === 1) {
            return mapWishlist({
                ...wishlist.rows[0],
                items: [...items.rows]
            })
        }

        return {
            'error': true
        };
    } catch (e) {
        console.log(e);
        return {
            'error': true,
        };
    }
}