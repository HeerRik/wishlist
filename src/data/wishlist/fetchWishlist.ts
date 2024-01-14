import type { Wishlist } from '@/types/wishlist'
import { FETCH_WISHLIST } from '@/data/queries/wishlist/get'
import {
    FETCH_WISHLIST_ITEMS_JOINED,
} from '@/data/queries/item/get'
import mapWishlist from '@/data/mappers/wishlist'

export const fetchWishlist = async (
    wishlistCode: string,
): Promise<Wishlist | { error: boolean }> => {
    try {
        const [wishlist, items] = await Promise.all([
            FETCH_WISHLIST({ wishlistCode }),
            FETCH_WISHLIST_ITEMS_JOINED({ wishlistCode }),
        ]);

        if (wishlist.rowCount === 1) {
            return mapWishlist({
                ...wishlist.rows[0],
                items: items.rows,
            })
        }

        return {
            'error': true,
        };
    } catch (e) {
        console.log(e);
        return {
            'error': true,
        };
    }
}