import { WishlistItem } from '@/types/wishlist'
import { SQLWishlistItem } from '@/types/sql/wishlist'

const mapWishlistItem = (resultFromDatabase: SQLWishlistItem): WishlistItem => {

    return {
        id: resultFromDatabase.id,
        code: resultFromDatabase.code || '',
        name: resultFromDatabase.name || '',
        image: resultFromDatabase.image || '',
        description: resultFromDatabase.description || '',
        shortDescription: resultFromDatabase.short_description || '',
        isYoinked: !!resultFromDatabase.is_yoinked,
        yoinkable: !!resultFromDatabase.yoinkable,
    }
}

export default mapWishlistItem