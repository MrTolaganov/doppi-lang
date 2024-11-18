import type { Metadata } from 'next'
import { ThemeProvider } from '@/components/contexts/theme-provider'
import { Navbar } from '@/components/navbar'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Footer } from '@/components/footer'
import '@/styles/globals.css'
import { ArrowUp } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Doppi Lang',
  metadataBase: new URL('https://doppi-lang.com'),
  description:
    "Bu vebsayt orqali , o'zbek tilida yoziluvchi dasturlash tillaridan biri doppi lang haqida tanishim olasz",
  icons: { icon: '/doppi-icon.png' },
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // action to top and bottom position absolute button
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} font-regular antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className='sm:container mx-auto w-[90vw] h-auto scroll-smooth'>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
