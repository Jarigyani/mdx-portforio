export type Post = {
  data: {
    filename: string
    title: string
    date: string
    description: string
    content: string
    eyecatch: string
    tags: string[]
  }
  content: string
}

export type Toc = {
  id: string
  tag: string
}

export type OGPData = {
  title: string
  description: string
  image: string
  url: string
}
