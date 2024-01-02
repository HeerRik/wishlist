import type { ReactNode } from 'react'
import type { Metadata } from 'next'
import Link from 'next/link';
import { Inter } from 'next/font/google'
import '@/app/styles/globals.scss'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'De grote meuk-lijst',
  description: 'Rikkert moet het ergens bijhouden',
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
            <div>{'De grote meuk-lijst'}</div>
          <nav>
              <ul>
                  <li>
                      <Link href={'/'}>
                          Home
                      </Link>
                  </li>
              </ul>
          </nav>
        </header>
        <main>
            {children}
        </main>

      </body>
    </html>
  )
}
