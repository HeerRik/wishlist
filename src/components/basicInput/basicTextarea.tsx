import { useId } from 'react'
import classes from './basicInput.module.scss'

export const BasicTextarea = ({
    identifier,
    label,
}: {
    identifier: string;
    label: string;
}) => {
    const generatedId = useId()
    return (
        <div className={classes.inputWrapper}>
            <textarea
                id={`${generatedId}-${identifier}`}
                name={identifier}
                placeholder={label}
            />
            <label
                htmlFor={`${generatedId}-${identifier}`}
            >
                {label}
            </label>
        </div>
    )
}