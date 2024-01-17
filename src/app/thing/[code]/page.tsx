import Image from 'next/image'
import { WishlistItem } from '@/types/wishlist'
import { fetchItem } from '@/data/wishlist/fetchItem'

import classes from './page.module.scss'
import { YoinkDialog } from '@/components/yoinkDialog';

export default async function Thing({ params }: { params: { code: string } }) {
    const wishlistItemResult = await fetchItem(params.code);

    if (Object.hasOwn(wishlistItemResult, 'error')) {
        return <h1>{'Oeps'}</h1>
    }
    const wishlistItem = wishlistItemResult as WishlistItem;
    return (
        <section className={classes.wishlistPage}>
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
                                    ? <YoinkDialog wishlistItem={wishlistItem}/>
                                    : <p>Helaas al geyoinkt</p>
                            )
                            : null
                    )}
                </div>
            </div>
        </section>
    )
}