import ArticleCard from '@/ArticleCard'
import GetAllPosts from '@/MDX/GetAllPosts'
import { motion } from 'framer-motion'
import { useEffect } from 'react'

type Props = {
  files: string[]
  posts: {
    data: {
      filename: string
      title: string
      date: string
      description: string
      eyecatch: string
      tags: string[]
    }
    content: string
  }[]
}

const index = ({ posts }: Props) => {
  useEffect(() => {
    const top = document.getElementById('forscroll')
    top?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
      className="max-w-[1024px] mx-auto"
    >
      <ul className="grid grid-cols-1 gap-6 sm:m-5 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <ArticleCard meta={post.data} key={post.data.filename} />
        ))}
      </ul>
    </motion.div>
  )
}

export const getStaticProps = async () => {
  const props = GetAllPosts()

  return { props }
}

export default index
