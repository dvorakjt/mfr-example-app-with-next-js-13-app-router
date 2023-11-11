import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import { RootFormProvider } from '@/components/forms/root-form-provider.component'
import './globals.css'

const openSans = Open_Sans({ variable : '--font-open-sans', subsets: ['latin'], weight : ['400', '700'] })

export const metadata: Metadata = {
  title: 'MFR - Example App with Next.js 13 App Router',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={openSans.variable}>
        <RootFormProvider>
          <h1 className={openSans.className} style={{fontSize: '20px', textAlign : 'center'}}>Modeled Forms React Example App</h1>
          {children}
        </RootFormProvider>
      </body>
    </html>
  )
}
