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
    wishlistItem,
}: YoinkDialogProps) => {
    const { yoinkItem } = useYoink();
    const [isOpen, setIsOpen] = useState(false);
    const handleYoink = () => {
        setIsOpen(true)
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const yoinker = e.currentTarget.elements[`yoinker-${wishlistItem.id}`].value;
        try{
            const result = await yoinkItem({
                itemId: wishlistItem.id,
                yoinker,
            })
            console.log(result);
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <>
            <Button
                onClick={handleYoink}
                extraClasses={classes.yoinkButton}
            >
                <span>{'🤝'}</span>
                <span>{'yoink'}</span>
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
                        type={'button'}
                    >
                        {'X'}
                    </button>
                    <div className={classes.dialogContent}>
                        <p>{'Vul hier je mail of iets anders in, dan kan je je yoink ook weer ongedaan maken 🙂'}</p>
                        <form
                            className={classes.form}
                            onSubmit={handleSubmit}
                        >
                            <div className={classes.inputWrapper}>
                                <input
                                    type={'text'}
                                    id={`yoinker-${wishlistItem.id}`}
                                    placeholder={'mail/code/whatever'}
                                />
                                <label htmlFor={`yoinker-${wishlistItem.id}`}>
                                    {'mail/code/whatever'}
                                </label>
                            </div>
                            <div className={classes.confirm}>
                                <Button
                                    type={'submit'}
                                    extraClasses={classes.confirmButton}
                                >
                                    <span>{'🤝'}</span>
                                </Button>
                            </div>
                        </form>
                    </div>
                </aside>
            </div>
        </>
    )
}