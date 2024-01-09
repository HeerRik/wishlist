import Image from 'next/image';
import Link from 'next/link';
import type { WishlistItem } from '@/types/wishlist'

import {
    LinkButton,
    Button
} from '@/app/components/button'
import classes from './wishlistItemCard.module.scss'

export interface WishlistItemCardProps {
    wishlistItem: WishlistItem;
}

export const WishlistItemCard = ({
    wishlistItem,
}: WishlistItemCardProps) => {
    const handleYoink = () => {};

    return (
        <article className={wishlistItem.isYoinked ? classes.card__yoinked : classes.card}>
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
                <Link
                    className={classes.title}
                    href={'/thing/'.concat(wishlistItem.identifier)}
                >
                    {wishlistItem.name}
                </Link>
                <p className={classes.shortDescription}>{wishlistItem.shortDescription}</p>
                <div className={classes.buttons}>
                    <LinkButton
                        href={'/thing/'.concat(wishlistItem.identifier)}
                    >
                        >
                    </LinkButton>
                    <Button
                        onClick={handleYoink}
                        extraClasses={classes.yoink}
                    >
                        <span>🤝</span>
                        <span>yoink</span>
                    </Button>
                </div>
            </div>
        </article>
    )
}