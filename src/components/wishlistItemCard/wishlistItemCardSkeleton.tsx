import classes from './wishlistItemCard.module.scss'

export const WishlistItemCardSkeleton = () => (
    <div className={classes.skeleton}>
        <div className={classes.card}>
            <div className={classes.imageWrapper}>
                <div className={classes.imagePlaceholder}/>
            </div>
            <div className={classes.content}>
                <div className={classes.title} />
                <p className={classes.shortDescription} />
                <div className={classes.actions}>
                    <div className={classes.linkButton}>{'>'}</div>
                    <div className={classes.yoinkButton}/>
                </div>
            </div>
        </div>
    </div>
    )
