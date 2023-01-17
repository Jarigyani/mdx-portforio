import Footer from '@/Footer'
import Navbar from '@/Navbar'
import { Noto_Serif_JP } from '@next/font/google'
import { AnimatePresence } from 'framer-motion'
import type { AppProps } from 'next/app'
import { useStore } from 'store'
import '../styles/globals.css'

const inter = Noto_Serif_JP({
  weight: '400',
  subsets: ['japanese'],
  variable: '--font-inter',
})

export default function App({ Component, pageProps, router }: AppProps) {
  const darkMode = useStore((state) => state.darkMode)

  return (
    <>
      <div
        id="forscroll"
        className="scroll-mt-16"
        data-theme={darkMode ? `mytheme` : `mytheme2`}
      >
        <style jsx global>
          {`
            html {
              font-family: ${inter.style.fontFamily}, serif;
            }
          `}
        </style>
        <div className="min-h-screen">
          <Navbar />
          <AnimatePresence mode="wait">
            <Component {...pageProps} key={router.asPath} />
          </AnimatePresence>
        </div>
        <Footer />
      </div>
    </>
  )
}
