import Toc from '@/Toc'
import { ReactNode } from '@mdx-js/react/lib'
import { motion, useAnimationControls } from 'framer-motion'
import Head from 'next/head'
import Image from 'next/image'

type Props = {
  text: string
  eyecatch: string
  date: string
  children: ReactNode
}

const BlogLayout = ({ text, eyecatch, children, date }: Props) => {
  const controls = useAnimationControls()
  // アイキャッチが読み込まれてからアニメーション
  const handleOnLoad = () => {
    controls.start({ opacity: 1, y: 0 })
  }

  return (
    <>
      <Head>
        <title>{text}</title>
      </Head>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
        className="mx-auto mb-5 max-w-[1200px]"
      >
        <div className="flex">
          <div className="p-2 md:p-5 w-full lg:w-[calc(100%_-_300px)]">
            <div className="relative">
              <Image
                src={eyecatch}
                width={860}
                height={860}
                alt="eyecatch image"
                className="rounded-md drop-shadow-md mb-10"
                priority
                onLoad={() => {
                  handleOnLoad()
                }}
              />
              <div className="absolute top-0 left-0 h-full w-full bg-base-100 opacity-80" />
              <h1 className="absolute top-1/2 -translate-y-1/2 w-full justify-center text-xl md:text-4xl mb-6 text-center">
                {text}
              </h1>
              <label className="opacity-80 absolute text-xs bottom-1 right-1 md:bottom-5 md:right-5">
                Published at {date}
              </label>
            </div>
            {children}
          </div>
          <div className="hidden pl-5 sticky top-24 border-l-2 border-base-200 h-max lg:block w-[280px]">
            <Toc />
          </div>
        </div>
      </motion.div>
    </>
  )
}

export default BlogLayout
