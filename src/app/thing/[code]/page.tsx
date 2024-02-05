import Image from 'next/image'
import type { WishlistItem } from '@/types/wishlist'
import { fetchItem } from '@/data/wishlist/fetchItem'

import { YoinkDialog } from '@/components/yoinkDialog';

import classes from './page.module.scss'

export const fetchCache = 'force-no-store';

type PageProperties = {
    params: {
        code: string
    }
}

export default async function Thing({ params }: PageProperties) {
    const wishlistItemResult = await fetchItem(params.code);

    if (Object.hasOwn(wishlistItemResult, 'error')) {
        return <h1>{'Oeps'}</h1>
    }
    const wishlistItem = wishlistItemResult as WishlistItem;
    return (
        <section>
            <div className={classes.card}>
                <h1 className={classes.title}>
                    {wishlistItem.name}
                </h1>
                <div className={classes.imageWrapper}>
                    {wishlistItem.image ? (
                        <Image
                            src={wishlistItem.image}
                            className={classes.image}
                            fill={true}
                            alt={''}
                            unoptimized
                        />
                    ) : (
                        <div className={classes.imagePlaceholder}/>
                    )}
                </div>
                <div className={classes.cardContent}>
                    <p>{wishlistItem.description}</p>
                    {(
                        wishlistItem.yoinkable ?
                            (
                                !wishlistItem.isYoinked
                                    ? (<div className={classes.yoinkButton}>
                                        <YoinkDialog wishlistItem={wishlistItem}/>
                                    </div>)
                                    : <p>{'Helaas al geyoinkt'}</p>
                            )
                            : null
                    )}
                </div>
            </div>
        </section>
    )
}