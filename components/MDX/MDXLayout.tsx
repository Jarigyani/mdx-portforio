import { ReactNode } from '@mdx-js/react/lib'
import { motion, useAnimationControls } from 'framer-motion'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useStore } from 'store'

type Props = {
  text: string
  eyecatch: string
  children: ReactNode
}

type Toc = {
  id: string
  tag: string
}

const MDXLayout = ({ text, eyecatch, children }: Props) => {
  const controls = useAnimationControls()
  const { darkMode } = useStore()
  const [toc, setToc] = useState<Toc[]>([])

  useEffect(() => {
    const top = document.getElementById('forscroll')
    top?.scrollIntoView({ behavior: 'smooth', block: 'start' })

    const elements = document.querySelectorAll('h1, h2')
    // .slice(2)は記事タイトルとメタデータを取り除くため
    const targets = Array.from(elements).slice(2)

    targets.map((target) => {
      if (target.id) {
        setToc((prev) => [
          // スプレッド構文のは重複排除
          ...prev,
          { id: target.id, tag: target.tagName },
        ])
        setToc((prev) => [
          ...Array.from(new Map(prev.map((p) => [p.id, p])).values()),
        ])
      }
    })
  }, [])

  useEffect(() => {
    // mdxファイル内のメタデータ非表示
    const meta = document.querySelector('h2')
    meta!.style.display = 'none'
    // なんかいらない線表示されるから👇
    const hr = document.querySelector('hr')
    hr?.classList.add('hidden')
  }, [darkMode])

  const handleOnClick = (t: Toc) => {
    const target = document.getElementById(t.id)
    target?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const handleOnLoad = () => {
    controls.start({ opacity: 1, y: 0 })
  }

  return (
    <>
      <Head>
        <title>{text}</title>
      </Head>
      <link
        rel="stylesheet"
        href="https://unpkg.com/dracula-prism/dist/css/dracula-prism.css"
      />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
        className="mx-auto mb-5 max-w-[1200px]"
      >
        <div className="flex">
          <div className="p-5 w-full lg:w-[calc(100%_-_300px)]">
            <h1 className="justify-center text-5xl mb-10">{text}</h1>
            <Image
              src={eyecatch}
              width={860}
              height={860}
              alt="eyecatch image"
              className="rounded-md drop-shadow-md"
              priority
              onLoad={() => {
                handleOnLoad()
              }}
            />
            {children}
          </div>
          <div className="hidden pl-5 sticky top-24 border-l-2 border-base-200 h-max lg:block w-[280px]">
            <h4 className="mb-4 text-lg">目次👻</h4>
            <ul className="steps steps-vertical pl-5">
              {toc.map((t) => (
                <li className="step" key={t.id}>
                  <button onClick={() => handleOnClick(t)}>{t.id}</button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </>
  )
}

export default MDXLayout
