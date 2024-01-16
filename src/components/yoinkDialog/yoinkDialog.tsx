"use client"
import { FormEvent } from 'react'
import { useState } from 'react'
import type { WishlistItem } from '@/types/wishlist'
import { useYoink } from '@/hooks/useYoink'
import { Button } from '@/components/button'
import { BasicInput } from '@/components/basicInput'
import classes from './yoinkDialog.module.scss'

export interface YoinkDialogProps {
    wishlistItem: WishlistItem;
}

export const YoinkDialog = ({
    wishlistItem,
}: YoinkDialogProps) => {
    const { yoinkItem, loading, success } = useYoink();
    const [isOpen, setIsOpen] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const handleYoink = () => {
        setIsOpen(true)
    };
console.log(loading, submitted, success)
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const input = e.currentTarget.elements.namedItem(`yoinker-${wishlistItem.id}`) as HTMLInputElement;
        const yoinker = input.value;

        try {
            setSubmitted(true);

            await yoinkItem({
                itemId: wishlistItem.id,
                yoinker,
            })
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
                        {loading ? (
                            <>
                                <h6>Momentje...</h6>
                                <p>{`${wishlistItem.name} wordt voor je afgestreept`}</p>
                            </>
                        ) : (success) ? (
                            <>
                                <h6>{'Hoera!'}</h6>
                                <p>{`Je hebt ${wishlistItem.name} voor Augurik geyoinkt, hij zal vast ontzettend blij zijn!`}</p>
                            </>
                        ) : (!loading && !success && submitted) ? (
                            <>
                                <h6>{'Oepsie'}</h6>
                                <p>{`Er ging iets niet helemaal lekker, misschien was iemand je voor, misschien ging er iets heel anders fout. We zullen het nooit weten want Augurik is lui en heeft geen fatsoewnlijke error-afhandeling gemaakt.`}</p>
                            </>
                        ) : (
                            <>
                                <h6>{`Je staat op het punt ${wishlistItem.name} te yoinken`}</h6>
                                <p>{'Vul hier je mail of iets anders in, dan kan je je yoink ook weer ongedaan maken 🙂'}</p>
                                <form
                                    className={classes.form}
                                    onSubmit={handleSubmit}
                                >
                                    <BasicInput
                                        identifier={`yoinker-${wishlistItem.id}`}
                                        label={'mail/code/whatever'}
                                    />
                                    <div className={classes.confirm}>
                                        <Button
                                            type={'submit'}
                                            extraClasses={classes.confirmButton}
                                        >
                                            <span>{'🤝'}</span>
                                        </Button>
                                    </div>
                                </form>
                            </>
                        )}

                    </div>
                </aside>
            </div>
        </>
    )
}