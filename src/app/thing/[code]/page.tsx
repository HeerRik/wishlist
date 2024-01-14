import { WishlistItem } from '@/types/wishlist'
import { fetchItem } from '@/data/wishlist/fetchItem'

import classes from './page.module.scss'

export default async function Thing({ params }: { params: { code: string } }) {
    const wishlistItemResult = await fetchItem(params.code);

    if (Object.hasOwn(wishlistItemResult, 'error')) {
        return <h1>{'Oeps'}</h1>
    }
    const wishlistItem = wishlistItemResult as WishlistItem;
    return (
        <section className={classes.wishlistPage}>
            <h1>{wishlistItem.name}</h1>
            <span>{wishlistItem.code}</span>
        </section>
    )
}