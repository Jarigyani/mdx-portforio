import fs from 'fs'
import matter from 'gray-matter'
import { useStore } from 'store'

type Props = {
  files: string[]
  posts: string[]
}

const index = ({ files, posts }: Props) => {
  const darkMode = useStore((state) => state.darkMode)
  const changeDarkMode = useStore((state) => state.changeDarkMode)
  console.log(matter(posts[0]))

  return (
    <>
      <div className="btn" onClick={changeDarkMode}>
        {darkMode ? 'light' : 'dark'}
      </div>
    </>
  )
}

export const getStaticProps = async () => {
  const files = fs.readdirSync('pages/blog')
  const posts = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(`pages/blog/${filename}`, 'utf8')
    // const { data } = matter(markdownWithMeta)

    return markdownWithMeta
  })
  // const files = fs.readdirSync(path.join('pages/blog'))

  // const posts = files.map((filename) => {
  //   const markdownWithMeta = fs.readFileSync(
  //     path.join('pages/blog', filename),
  //     'utf-8'
  //   )
  //   const { data: data } = matter(markdownWithMeta)

  //   return {
  //     data,
  //     slug: filename.split('.')[0],
  //   }
  // })

  // return {
  //   props: {
  //     posts,
  //   },
  // }
  return { props: { files, posts } }
}

export default index
