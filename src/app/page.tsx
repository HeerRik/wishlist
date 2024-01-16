import type { Wishlist as WishlistType } from '@/types/wishlist'
import { fetchWishlist } from '@/data/wishlist/fetchWishlist'

import { Wishlist } from '@/components/wishlist'
import classes from './page.module.scss'

export default async function Home() {
    const wishlist = await fetchWishlist('all');

    return (
        <div>
            <h1>{'Augurik\'s meuklijst'}</h1>
            <section>
                {Object.hasOwn(wishlist, 'error') ? (
                    <div>{'Oeps'}</div>
                ) : (
                    <Wishlist wishlist={wishlist as WishlistType}/>
                )}
            </section>
        </div>
    )
}
