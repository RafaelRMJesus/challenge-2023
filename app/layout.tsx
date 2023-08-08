import Footer from '@/components/footer'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/components/navbar'
import { ThemeProvider } from '@/providers/theme-provider'
import { ToasterProvider } from '@/providers/toast-provider'

const font = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Schneider',
  description: 'Schneider',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    
      <html lang="en">
        <body className={font.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ToasterProvider />
          <Navbar />
            {children}
        </ThemeProvider>
        </body>
      </html>


  )
}
