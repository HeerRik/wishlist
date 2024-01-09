import { fetchWishlist } from '@/data/wishlist/fetchWishlist'

import { Wishlist } from '@/app/components/wishlist'
import classes from './page.module.scss'

export default async function Home() {
    const wishlist = await fetchWishlist();

    return (
        <main className={classes.main}>
            <h1>Augurik's meuklijst</h1>
            <section>
                <Wishlist wishlist={wishlist}/>
            </section>
        </main>
    )
}
