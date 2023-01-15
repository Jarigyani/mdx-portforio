import ArticleCard from '@/ArticleCard'
import { motion } from 'framer-motion'
import fs from 'fs'
import matter from 'gray-matter'
import { useEffect } from 'react'

type Props = {
  posts: {
    filename: string
    title: string
    date: string
    description: string
    eyecatch: string
    tags: string[]
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
          <ArticleCard meta={post} key={post.filename} />
        ))}
      </ul>
    </motion.div>
  )
}

export const getStaticProps = async () => {
  // node.jsのfsでpage/blog以下のファイル一覧を取得
  const files = fs.readdirSync('pages/blog')

  // 各ファイルからメタデータ取り出す
  const posts = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(`pages/blog/${filename}`, 'utf8')
    const { data: metadata } = matter(markdownWithMeta)
    return metadata
  })

  // 日付を新しい順に
  posts.sort((a, b) => (a.date < b.date ? 1 : -1))

  return { props: { posts } }
}

export default index
