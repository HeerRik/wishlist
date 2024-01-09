import { ReactNode } from 'react';
import classes from './button.module.scss'

export interface ButtonProps {
    children: ReactNode;
}

export const Button = ({
    children
}: ButtonProps) => {
    return (
        <button
            className={classes.button}
        >
            {children}
        </button>
    )
}