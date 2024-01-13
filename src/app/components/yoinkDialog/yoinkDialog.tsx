"use client"

import { useState } from 'react'
import type { WishlistItem } from '@/types/wishlist'
import { useYoink } from '@/app/hooks/useYoink'
import { Button } from '@/app/components/button'
import classes from './yoinkDialog.module.scss'

export interface YoinkDialogProps {
    wishlistItem: WishlistItem;
}

export const YoinkDialog = ({
    wishlistItem
}: YoinkDialogProps) => {
    const { yoinkItem } = useYoink();
    const [yoinker, setYoinker] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const handleYoink = () => {
        setIsOpen(true)
    };

    const handleConfirm = () => {
        yoinkItem({
            itemId: wishlistItem.id,
            yoinker
        })
        setIsOpen(false)
    }

    return (
        <>
            <Button
                onClick={handleYoink}
                extraClasses={classes.yoinkButton}
            >
                <span>🤝</span>
                <span>yoink</span>
            </Button>
            <div
                className={isOpen ? classes.wrapper__open : classes.wrapper}
                onClick={(e) => {
                    const target = e.target as HTMLElement;
                    if (target.className === classes.wrapper__open) {
                        setIsOpen(false)
                    }
                }}>
                <aside className={isOpen ? classes.dialog__open : classes.dialog}>
                    <button
                        className={classes.closeButton}
                        onClick={() => setIsOpen(false)}
                        >
                        {'X'}
                    </button>
                    <div className={classes.dialogContent}>
                        <p>Ik ben een dialog!</p>
                        <div>
                            <input
                                type={'text'}
                                onInput={(e) => {console.log(e);}}
                                value={yoinker}
                            />
                        </div>
                    </div>
                </aside>
            </div>
        </>
    )
}