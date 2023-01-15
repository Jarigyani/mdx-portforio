import BlogLayout from '@/MDX/BlogLayout'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import rehypePrettyCode from 'rehype-pretty-code'
import remarkGfm from 'remark-gfm'
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
  const components = MDXComponents().components
  const mdxElement = {
    Wpshell,
    Wpshell2,
    ...components,
  }
  return (
    <>
      <BlogLayout text={post.data.title} eyecatch={post.data.eyecatch}>
        {/* <link
          rel="stylesheet"
          href="https://unpkg.com/dracula-prism/dist/css/dracula-prism.css"
        /> */}
        <MDXRemote
          compiledSource={post.content}
          components={mdxElement}
          {...mdxSource}
        />
      </BlogLayout>
    </>
  )
}

export const getStaticProps = async ({
  params,
}: {
  params: { filename: string }
}) => {
  const options = {
    // Use one of Shiki's packaged themes
    theme: 'solarized-dark',
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
