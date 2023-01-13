import { ReactNode } from '@mdx-js/react/lib'
import Head from 'next/head'
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

const MDXLayout = ({ text, eyecatch, children }: Props) => {
  const [toc, setToc] = useState<Toc[]>([])

  let ignore = false
  useEffect(() => {
    if (!ignore) {
      const elements = document.querySelectorAll('h1')
      const targets = Array.from(elements)
      targets.map((target) => {
        target.id &&
          setToc((prev) => [...prev, { id: target.id, tag: target.tagName }])
      })
    }
    return () => {
      ignore = true
    }
  }, [])

  const handleOnClick = (t: Toc) => {
    const target = document.getElementById(t.id)
    target?.scrollIntoView({ behavior: 'smooth', block: 'start' })
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
      <div className="mx-auto mb-5 max-w-[1200px]">
        <div className="flex">
          <div className="p-5 w-full lg:w-[calc(100%_-_300px)]">
            <h1 className="justify-center text-5xl mb-10">{text}</h1>
            <img
              src={eyecatch}
              // width={4000}
              // height={2000}
              alt="eyecatch image"
              className="rounded-md drop-shadow-md"
              // priority
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
      </div>
    </>
  )
}

export default MDXLayout
