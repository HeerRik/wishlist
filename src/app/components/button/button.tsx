import { ReactNode } from 'react';
import classes from './button.module.scss'

export interface ButtonProps {
    children: ReactNode;
    extraClasses?: string;
}

export const Button = ({
    children,
    extraClasses,
    ...restProps
}: ButtonProps) => {
    return (
        <button
            className={`${classes.button} ${extraClasses}`}
            {...restProps}
        >
            {children}
        </button>
    )
}