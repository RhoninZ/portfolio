import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/header'
import ActiveSectinoContextProvider from '@/context/active-section-context'
import { Toaster } from 'react-hot-toast'
import Footer from '@/components/footer'
import ThemeSwitch from '@/components/theme-switch'
import ThemeContextProvider from '@/context/theme-context'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Yang's Personal portfolio",
  description: 'Yang Zhang is an Computer Engineering Student.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='!scroll-smooth'> 
      <body className={'${inter.className} pt-18 sm:pt-36  bg-gray-50 text-gray-950 relative dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90'}>
        <div className =" bg-[#d8f2e8] absolute top-[-5rem] right-[11rem] h-[31.25rem] w-[31.25rem] -z-10 rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className =" bg-[#dbd7fb] absolute top-[-1rem] left-[-35rem] h-[31.25rem] w-[50rem] -z-10 rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>
       
        <ThemeContextProvider>
         <ActiveSectinoContextProvider>
          <Header/>       
          {children}
          <Toaster position ="top-center"/>
          <Footer />
          <ThemeSwitch />
        </ActiveSectinoContextProvider>
        </ThemeContextProvider>
        </body>
    </html>
  )
}
