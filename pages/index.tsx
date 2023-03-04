import ArticleCard from '@/ArticleCard'
import GetAllPosts from '@/MDX/GetAllPosts'
import { getOGP } from '@/MDX/GetOGP'
import Head from 'next/head'
import { useEffect } from 'react'
import { Post } from 'types/types'

type Props = {
  posts: Post[]
  data: { title: string; description: string; image: string; url: string }
}

const index = ({ posts, data }: Props) => {
  useEffect(() => {
    console.log(data)
    const top = document.getElementById('forscroll')
    top?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [])

  return (
    <>
      <Head>
        <title>Jarigyani</title>
      </Head>
      <div className="max-w-[1024px] mx-auto">
        <h1 className="text-center mt-5 mb-7 text-6xl">Articles</h1>
        <ul className="grid grid-cols-1 gap-6 my-5 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => {
            if (!post.data.tags.includes('gakkou')) {
              return <ArticleCard meta={post.data} key={post.data.filename} />
            }
          })}
        </ul>
      </div>
    </>
  )
}

export const getStaticProps = async () => {
  const props = GetAllPosts()
  const data = getOGP('https://sg.wantedly.com/projects/1267556')
  return { props, data }
}

export default index
