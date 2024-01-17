// import classes from './page.module.scss'
import { NewItemForm } from '@/components/newItemForm';

export default async function NewItemPage() {
    return (
        <div>
            <h1>{'Nieuwe meuk toevoegen'}</h1>
            <section>
                <NewItemForm/>
            </section>
        </div>
    )
}
