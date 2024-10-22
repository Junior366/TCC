import './globals.css'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Energia e Força',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br" className="scroll-smooth">
      <body>{children}</body>
    </html>
  )
}
