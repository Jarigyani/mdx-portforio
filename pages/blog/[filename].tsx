import BlogLayout from '@/MDX/BlogLayout'
import fs from 'fs'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import { useEffect } from 'react'
import rehypePrettyCode from 'rehype-pretty-code'
import remarkGfm from 'remark-gfm'
import AnimDrawer from '../../components/blog/AnimDrawer'
import Wpshell from '../../components/blog/Wpshell'
import Wpshell2 from '../../components/blog/Wpshell2'
import GetAllPosts from '../../components/MDX/GetAllPosts'
import MDXComponents from '../../components/MDX/MDXComponents'

type Props = {
  mdxSource: Buffer
  post: {
    data: {
      [key: string]: any
    }
    content: string
  }
}

const PostPage = ({ mdxSource, post }: Props) => {
  useEffect(() => {
    const top = document.getElementById('forscroll')
    top?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [])

  const components = MDXComponents().components
  const mdxElement = {
    Wpshell,
    Wpshell2,
    AnimDrawer,
    ...components,
  }

  return (
    <>
      <BlogLayout
        date={post.data.date}
        text={post.data.title}
        eyecatch={post.data.eyecatch}
      >
        <MDXRemote
          compiledSource={post.content}
          components={mdxElement}
          {...mdxSource}
        />
      </BlogLayout>
    </>
  )
}

type PathProps = {
  params: {
    filename: string
  }
}
export const getStaticProps = async ({ params }: PathProps) => {
  const options = {
    theme: JSON.parse(fs.readFileSync('public/moonlight-ii.json', 'utf-8')),
    keepBackground: false,
  }

  const post = GetAllPosts().posts.find(
    (post) => post.data.filename === params.filename
  )

  const mdxSource = await serialize(post?.content as string, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [[rehypePrettyCode, options]],
    },
    parseFrontmatter: true,
  })

  return {
    props: { mdxSource, post },
  }
}

export const getStaticPaths = async () => {
  const { posts } = GetAllPosts()
  return {
    paths: posts.map((post) => {
      return { params: { filename: post.data.filename as string } }
    }),
    fallback: false,
  }
}

export default PostPage
