import Footer from '@/Footer'
import MDXComponents from '@/MDX/MDXComponents'
import Navbar from '@/Navbar'
import { MDXProvider } from '@mdx-js/react'
import { Noto_Serif_JP } from '@next/font/google'
import { AnimatePresence } from 'framer-motion'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import { useStore } from 'store'
import '../styles/globals.css'

const inter = Noto_Serif_JP({
  weight: '400',
  subsets: ['japanese'],
  variable: '--font-inter',
})

export default function App({ Component, pageProps, router }: AppProps) {
  const darkMode = useStore((state) => state.darkMode)
  const { components } = MDXComponents()

  useEffect(() => {
    const top = document.getElementById('forscroll')
    top?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  })

  return (
    <>
      <div
        id="forscroll"
        className="min-h-screen w-screen scroll-mt-20"
        data-theme={darkMode ? `mytheme` : `light`}
      >
        <style jsx global>{`
          html {
            font-family: ${inter.style.fontFamily}, serif;
          }
        `}</style>
        <Navbar />
        <MDXProvider components={components}>
          <AnimatePresence mode="wait">
            <Component {...pageProps} key={router.asPath} />
          </AnimatePresence>
        </MDXProvider>
      </div>
      <Footer />
    </>
  )
}
