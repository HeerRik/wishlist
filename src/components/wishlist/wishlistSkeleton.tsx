import type { Wishlist as WishlistType } from '@/types/wishlist'
import { WishlistItemCardSkeleton } from '@/components/wishlistItemCard'
import classes from './wishlist.module.scss'

export interface WishlistProps {
    wishlist: WishlistType;
}

export const WishlistSkeleton = () => {
    return (
        <div className={classes.skeleton}>
            <h2 className={classes.title}/>
            <div className={classes.items}>
                {Array.from({length: 12}).map((x, i) => (
                    <WishlistItemCardSkeleton
                        key={`skeleton-${i})`}
                    />
                ))}
            </div>
        </div>
    )
}