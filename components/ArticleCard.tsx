import Image from 'next/image'
import Link from 'next/link'

type Props = {
  meta: {
    filename: string
    title: string
    date: string
    description: string
    eyecatch: string
    tags: string[]
  }
}

const ArticleCard = ({ meta }: Props) => {
  return (
    <div className="image-full card mx-auto h-52 w-80 bg-base-100 shadow-md transition-all hover:scale-105">
      <figure>
        <Image
          priority
          src={meta.eyecatch}
          width={500}
          height={500}
          alt="eyecatch"
        />
      </figure>
      <div className="card-body h-52">
        <h2 className="card-title text-lg">{meta.title}</h2>
        <p className="text-xs">{meta.description}</p>
        <div className="card-actions justify-end relative">
          <div className="absolute bottom-0 left-0">
            <label className="underline bottom-0 opacity-80 text-md">
              {meta.date}
            </label>
          </div>
          <Link href={`/blog/${meta.filename}`}>
            <button className="btn-primary btn bottom-3">Read Now</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ArticleCard
