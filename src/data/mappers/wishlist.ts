import { Wishlist } from '@/types/wishlist'
import { SQLWishlist } from '@/types/sql/wishlist'

import mapWishlistItem from '@/data/mappers/wishlistItem'

const mapWishlist = (resultFromDatabase: SQLWishlist): Wishlist => {
    return {
        id: resultFromDatabase.id,
        code: resultFromDatabase.code,
        name: resultFromDatabase.name,
        items: resultFromDatabase.items?.map(item => mapWishlistItem(item)) || []
    }
}
export default mapWishlist