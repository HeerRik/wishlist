import type { HTMLInputTypeAttribute } from 'react';
import { useId } from 'react'
import classes from './basicInput.module.scss'

export const BasicInput = ({
    identifier,
    label,
    type = 'text'
}: {
    identifier: string;
    label: string;
    type?: HTMLInputTypeAttribute
}) => {
    const generatedId = useId()
    return (
        <div className={classes.inputWrapper}>
            <input
                id={`${generatedId}-${identifier}`}
                name={identifier}
                placeholder={label}
                type={type}
            />
            <label
                htmlFor={`${generatedId}-${identifier}`}
            >
                {label}
            </label>
        </div>
    )
}