import classes from '@/app/thing/[code]/page.module.scss';

export const ItempageSkeleton = () => (
    <div className={classes.skeleton}>
        <div className={classes.card}>
            <div className={classes.title}/>
            <div className={classes.imageWrapper}>
                <div className={classes.imagePlaceholder}/>
            </div>
            <div className={classes.cardContent}>
                <div className={classes.description}/>
                <div className={classes.yoinkButton}/>
            </div>
        </div>
    </div>
)