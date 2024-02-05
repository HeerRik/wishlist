// import classes from './page.module.scss'
import { NewItemForm } from '@/components/newItemForm';

export default async function ManagePage() {
    return (
        <div>
            <h1>{'Meuk beheren'}</h1>
            <section>
                <NewItemForm/>
            </section>
        </div>
    )
}
