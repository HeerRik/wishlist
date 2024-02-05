import { WishlistSkeleton } from '@/components/wishlist'

import classes from './homepageSkeleton.module.scss'

export const HomepageSkeleton = () => (
    <div className={classes.wrapper}>
        <div className={classes.title}/>
        <WishlistSkeleton/>
    </div>
)
