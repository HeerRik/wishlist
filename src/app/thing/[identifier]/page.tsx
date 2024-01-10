import { fetchWishlist } from '@/data/wishlist/fetchWishlist'

import classes from './page.module.scss'

export default async function Thing({ params }: { params: { identifier: string } }) {
    const wishlist = await fetchWishlist();
    const wishlistItem = wishlist.items.find(wishlistItem => wishlistItem.identifier === params.identifier)

    return (
        <div>
            <h1>{wishlistItem.name}</h1>
            <span>{wishlistItem.identifier}</span>
            <section>

            </section>
        </div>
    )
}
