import type { Wishlist as WishlistType } from '@/types/wishlist'
import { WishlistItemCard } from '@/components/wishlistItemCard'
import classes from './wishlist.module.scss'

export interface WishlistProps {
    wishlist: WishlistType;
}

export const Wishlist = ({
    wishlist
}: WishlistProps) => {
    return (
        <div>
            <h2 className={classes.title}>{wishlist.name}</h2>
            <div className={classes.items}>
                {wishlist.items?.filter(item => process.env.VERCEL_ENV !== 'development' || !item.isYoinked).map((wishlistItem, i) => (
                    <WishlistItemCard
                        key={`${wishlistItem.code}_${i})`}
                        wishlistItem={wishlistItem}
                    />
                ))}
            </div>
        </div>
    )
}