import ArticleCard from '@/ArticleCard'
import GetAllPosts from '@/MDX/GetAllPosts'
import { motion } from 'framer-motion'
import Head from 'next/head'
import { Post } from 'types/types'

type Props = { posts: Post[] }

const index = ({ posts }: Props) => {
  // useEffect(() => {
  //   const top = document.getElementById('forscroll')
  //   top?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  // }, [])

  return (
    <>
      <Head>
        <title>Jarigyani</title>
      </Head>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
        className="max-w-[1024px] mx-auto"
      >
        <h1 className="text-center my-5 text-6xl">Articles</h1>
        <ul className="grid grid-cols-1 gap-6 my-5 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <ArticleCard meta={post.data} key={post.data.filename} />
          ))}
        </ul>
      </motion.div>
    </>
  )
}

export const getStaticProps = async () => {
  const props = GetAllPosts()
  return { props }
}

export default index
