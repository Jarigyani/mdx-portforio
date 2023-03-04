import ArticleCard from '@/ArticleCard'
import GetAllPosts from '@/MDX/GetAllPosts'
import { getOGP } from '@/services/getOGP'
import Head from 'next/head'
import { useEffect } from 'react'
import { Post } from 'types/types'

type Props = { posts: Post[]; data: any }

const index = ({ posts, data }: Props) => {
  // const [data, setData] = useState<{
  //   title: string
  //   description: string
  //   image: string
  //   url: string
  // }>()

  useEffect(() => {
    // fetch(
    //   'http://localhost:8080/ogp?url=https://sg.wantedly.com/projects/1267556'
    // ).then((res) => {
    //   res.json().then((data) => {
    //     setData(data)
    //   })
    // })
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
        <h2>{data?.title}</h2>
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
  const posts = GetAllPosts()
  const data = await getOGP(
    'https://qiita.com/mtoutside/items/cee708841cad7e02f85c'
  )
  return { props: { posts: posts.posts, data } }
}

export default index
