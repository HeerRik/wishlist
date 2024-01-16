import type { Wishlist as WishlistType } from '@/types/wishlist'
import { fetchWishlist } from '@/data/wishlist/fetchWishlist'

import classes from './page.module.scss'
import { BasicInput } from '@/components/basicInput';

export default async function NewItemPage() {

    return (
        <div>
            <h1>{'Nieuwe meuk toevoegen'}</h1>
            <section>
                <form className={classes.form}>
                    <BasicInput
                        identifier={'name'}
                        label={'Naam'}
                    />
                    <BasicInput
                        identifier={'code'}
                        label={'Code'}
                    />
                    <BasicInput
                        identifier={'description'}
                        label={'Beschrijving'}
                    />
                    <BasicInput
                        identifier={'short_description'}
                        label={'Beschrijving maar dan kort'}
                    />
                    <BasicInput
                        identifier={'image'}
                        label={'Linkje naar afbeelding'}
                    />
                    <BasicInput
                        identifier={'pass'}
                        label={'Wachtwoord'}
                        type={'password'}
                    />
                </form>
            </section>
        </div>
    )
}
