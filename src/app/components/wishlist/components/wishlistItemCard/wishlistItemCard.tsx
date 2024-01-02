import Image from 'next/image';
import type { WishlistItem } from '@/types/wishlist'
import { useYoink } from '@/app/hooks/useYoink'
import classes from './wishlistItemCard.module.scss'

export interface WishlistItemCardProps {
    wishlistItem: WishlistItem;
}

export const WishlistItemCard = ({
    wishlistItem
}: WishlistItemCardProps) => {
    const a = useYoink();
    return (
        <article className={classes.card}>
            <div className={classes.imageWrapper}>
                {wishlistItem.image && (
                    <Image
                        src={wishlistItem.image}
                        className={classes.image}
                        fill={true}
                        alt={''}
                        unoptimized
                    />
                )}
            </div>
            <div className={classes.content}>
                <span className={classes.title}>{wishlistItem.name}</span>
                <p className={classes.shortDescription}>{wishlistItem.shortDescription}</p>
                <button
                    className={classes.yoink}
                >
                    <span>🤝</span>
                    <span>yoink</span>
                </button>
            </div>
        </article>
    )
}