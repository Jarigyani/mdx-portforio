type Props = {
  post: Buffer
}

const BlogPost = ({ post }: Props) => {
  return (
    <>
      <div>{post}</div>
    </>
  )
}

export default BlogPost
