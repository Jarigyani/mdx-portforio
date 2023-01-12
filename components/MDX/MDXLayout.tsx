import { ReactNode } from '@mdx-js/react/lib'

type Props = {
  children: ReactNode
}

const MDXLayout = ({ children }: Props) => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://unpkg.com/dracula-prism/dist/css/dracula-prism.css"
      />
      <div className="mx-auto mb-5 max-w-[1200px]">
        <div className="flex">
          <div className="p-5 w-full lg:w-[calc(100%_-_300px)]">{children}</div>
          <div className="hidden sticky top-24 border-l-2 border-base-200 h-96 lg:block w-[280px]"></div>
        </div>
      </div>
    </>
  )
}

export default MDXLayout
