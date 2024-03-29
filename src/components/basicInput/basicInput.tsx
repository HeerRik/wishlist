import type { InputHTMLAttributes } from 'react';
import { useId } from 'react'
import classes from './basicInput.module.scss'

export const BasicInput = ({
    identifier,
    label,
    type = 'text',
    value = false,
    onChange = false,
}: {
    identifier: string;
    label: string;
    type?: InputHTMLAttributes<HTMLInputElement>['type']
    onChange?: InputHTMLAttributes<HTMLInputElement>['onChange'] | false
    value?: InputHTMLAttributes<HTMLInputElement>['value'] | false
}) => {
    const generatedId = useId()
    return (
        <div className={classes.inputWrapper}>
            <input
                id={`${generatedId}-${identifier}`}
                name={identifier}
                placeholder={label}
                type={type}
                {...((onChange !== false && value !== false) ? {
                    onChange,
                    value,
                } : {})}
            />
            <label
                htmlFor={`${generatedId}-${identifier}`}
            >
                {label}
            </label>
        </div>
    )
}