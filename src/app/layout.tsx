import type { ReactNode } from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/app/styles/globals.scss'
import classes from './baseLayout.module.scss'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'De grote meuk-lijst',
    description: 'Rikkert moet het ergens bijhouden',
    robots: 'noindex'
}

export default function RootLayout({
    children,
}: {
    children: ReactNode
}) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <header>
            {/*<div>{'De grote meuk-lijst'}</div>*/}
            {/*<nav>*/}
            {/*    <ul>*/}
            {/*        <li>*/}
            {/*            <Link href={'/'}>*/}
            {/*                Home*/}
            {/*            </Link>*/}
            {/*        </li>*/}
            {/*    </ul>*/}
            {/*</nav>*/}
        </header>
        <main className={classes.main}>
            {children}
        </main>

        </body>
        </html>
    )
}
