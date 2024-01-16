import { ReactNode } from 'react';
import classes from './button.module.scss'
import { MouseEventHandler } from 'react';

export interface ButtonProps {
    children: ReactNode;
    extraClasses?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>
    type?: HTMLButtonElement['type']
}

export const Button = ({
    children,
    extraClasses,
    onClick = () => {},
    type = 'button',
}: ButtonProps) => {
    return (
        <button
            className={`${classes.button} ${extraClasses}`}
            onClick={onClick}
            type={type}
        >
            {children}
        </button>
    )
}