import Footer from '@/Footer'
import MDXComponents from '@/MDX/MDXComponents'
import Navbar from '@/Navbar'
import { MDXProvider } from '@mdx-js/react'
import { AnimatePresence } from 'framer-motion'
import type { AppProps } from 'next/app'
import { useStore } from 'store'
import '../styles/globals.css'

export default function App({ Component, pageProps, router }: AppProps) {
  const darkMode = useStore((state) => state.darkMode)
  const { components } = MDXComponents()

  return (
    <>
      <div
        className="min-h-screen w-screen"
        data-theme={darkMode ? `mytheme` : `light`}
      >
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
