import Image from 'next/image'
import { MdOutlineUpdate } from 'react-icons/md'

type Props = {
  src: string
  alt: string
  title: string
  publishedAt: string
}
const BlogTitle = ({ src, alt, title, publishedAt }: Props) => {
  return (
    <div className="image-full card h-max w-full bg-black shadow-md z-0">
      <figure>
        <Image src={src} alt={alt} width={1000} height={1000} priority />
      </figure>
      <div className="card-body">
        <h1 className="card-title lg:text-3xl justify-center my-auto">
          {title}
        </h1>
        <label className="flex underline opacity-75 absolute bottom-5 right-5 text-sm">
          <MdOutlineUpdate className="h-6 w-6 mr-2" />
          {publishedAt}
        </label>
      </div>
    </div>
  )
}

export default BlogTitle
