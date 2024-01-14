import type { WishlistItem } from '@/types/wishlist'
import {
    FETCH_ITEM_BY_CODE,
} from '@/data/queries/item/get'
import mapWishlistItem from '@/data/mappers/wishlistItem'

export const fetchItem = async (
    itemCode: string,
): Promise<WishlistItem | {error: boolean}> => {
    try {
        const item = await FETCH_ITEM_BY_CODE({itemCode});

        if (item.rowCount === 1) {
            return mapWishlistItem(item.rows[0])
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