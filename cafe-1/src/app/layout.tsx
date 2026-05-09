import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ethos Coffee | Organic & Sustainable',
  description: 'Experience the finest organic coffee, ethically sourced and roasted to perfection.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
