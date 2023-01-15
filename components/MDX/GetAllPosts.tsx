import fs from 'fs'
import matter from 'gray-matter'

const GetAllPosts = () => {
  // node.jsのfsでpage/blog以下のファイル一覧を取得
  const files = fs.readdirSync('blog')

  // extract metadata from each file
  const posts = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(`blog/${filename}`, 'utf8')
    const { data, content } = matter(markdownWithMeta)
    return { data, content }
  })

  // 日付を新しい順に
  posts.sort((a, b) => (a.data.date < b.data.date ? 1 : -1))

  return { files: files, posts: posts }
}

export default GetAllPosts
