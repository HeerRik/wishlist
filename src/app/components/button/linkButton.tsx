import { ReactNode } from 'react';
import Link from 'next/link';
import classes from './button.module.scss'

export interface LinkButtonProps {
    children: ReactNode;
    href: string;
    extraClasses?: string;
}

export const LinkButton = ({
    children,
    href,
    extraClasses
}: LinkButtonProps) => {
    return (
        <Link
            className={`${classes.button} ${extraClasses}`}
            href={href}
        >
            {children}
        </Link>
    )
}