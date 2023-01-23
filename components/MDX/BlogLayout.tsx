import BlogTitle from '@/BlogTitle'
import Drawer from '@/Drawer'
import Toc from '@/Toc'
import { ReactNode } from '@mdx-js/react/lib'
import Head from 'next/head'
import { useState } from 'react'

type Props = {
  text: string
  eyecatch: string
  date: string
  children: ReactNode
}

const BlogLayout = ({ text, eyecatch, children, date }: Props) => {
  const [load, setLoad] = useState(false)

  return (
    <>
      <Head>
        <title>{text}</title>
      </Head>
      <div className={`mx-auto mb-5 max-w-[1200px]`}>
        <div className="flex">
          <div className="p-2 md:p-5 w-full lg:w-[calc(100%_-_300px)]">
            <BlogTitle
              src={eyecatch}
              alt={'eyecatch'}
              title={text}
              publishedAt={date}
            />
            {children}
          </div>
          <div className="hidden pl-5 sticky top-24 border-l-2 border-base-200 h-max lg:block w-[280px]">
            <Toc />
          </div>
          <div className="bottom-3 right-3 fixed">
            <div className="sticky">
              <Drawer />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BlogLayout
