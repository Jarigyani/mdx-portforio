import Toc from '@/Toc'
import { ReactNode } from '@mdx-js/react/lib'
import { motion, useAnimationControls } from 'framer-motion'
import Head from 'next/head'
import Image from 'next/image'

type Props = {
  text: string
  eyecatch: string
  children: ReactNode
}

const BlogLayout = ({ text, eyecatch, children }: Props) => {
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
            <h1 className="justify-center text-3xl md:text-5xl mb-6">{text}</h1>
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
