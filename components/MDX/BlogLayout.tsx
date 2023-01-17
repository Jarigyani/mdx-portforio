import { ReactNode } from '@mdx-js/react/lib'
import { motion, useAnimationControls } from 'framer-motion'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'

type Props = {
  text: string
  eyecatch: string
  children: ReactNode
}

type Toc = {
  id: string
  tag: string
}

const BlogLayout = ({ text, eyecatch, children }: Props) => {
  const controls = useAnimationControls()
  const [toc, setToc] = useState<Toc[]>([])

  useEffect(() => {
    // 読み込み時トップにスクロール
    // const top = document.getElementById('forscroll')
    // top?.scrollIntoView({ behavior: 'smooth', block: 'start' })

    const elements = document.querySelectorAll('h2, h3')
    const targets = Array.from(elements)
    console.log(targets)

    targets.map((target) => {
      target.id = target.innerHTML
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

  // 目次クリック時の処理
  const handleOnClick = (t: string) => {
    if (t === 'mokuji') {
      const top = document.getElementById('forscroll')
      top?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      return
    }
    const target = document.getElementById(t)
    target?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

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
          <div className="p-5 w-full lg:w-[calc(100%_-_300px)]">
            <h1 className="justify-center text-5xl mb-6">{text}</h1>
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
            <button className="flex">
              <h4
                id="mokuji"
                className="text-lg mb-2"
                onClick={(e) => handleOnClick(e.currentTarget.id)}
              >
                目次👻
              </h4>
            </button>
            <ul className="steps steps-vertical pl-5">
              {toc.map((t) => {
                if (t.tag === 'H2') {
                  return (
                    <li className="list-decimal" key={t.id}>
                      <button onClick={() => handleOnClick(t.id)}>
                        {t.id}
                      </button>
                    </li>
                  )
                } else {
                  return (
                    <ul>
                      <li className="list-disc opacity-80 ml-3">
                        <button onClick={() => handleOnClick(t.id)}>
                          {t.id}
                        </button>
                      </li>
                    </ul>
                  )
                }
              })}
            </ul>
          </div>
        </div>
      </motion.div>
    </>
  )
}

export default BlogLayout
