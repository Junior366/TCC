import { Navbar } from '@/components/navbar/Navbar'
import { Footer } from '@/components/footer/Footer'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br" className="scroll-smooth">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
