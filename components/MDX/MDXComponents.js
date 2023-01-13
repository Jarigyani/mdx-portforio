import Image from 'next/image'
import Link from 'next/link'
import { MdContentCopy } from 'react-icons/md'
import { useStore } from 'store'

const MDXComponents = () => {
  const darkMode = useStore((state) => state.darkMode)
  const copy = useStore((state) => state.copy)
  const changeCopy = useStore((state) => state.changeCopy)

  const handleOnClick = (e) => {
    navigator.clipboard
      .writeText(e)
      .then(changeCopy)
      .then(setTimeout(changeCopy, 2000))
  }

  const components = {
    h1: (props) => (
      <h1
        id={props.children}
        className="scroll-mt-20 border-b-2 border-base-200 mt-8 mb-5 pb-2 text-3xl break-words"
        {...props}
      />
    ),
    h2: (props) => <h2 className="my-3 text-2xl" {...props} />,
    h3: (props) => <h3 className="my-2 text-xl" {...props} />,
    table: (props) => (
      <div className="overflow-x-auto">
        <table
          className="drop-shadow-md overflow-auto table my-3 text-center"
          {...props}
        />
      </div>
    ),
    a: (props) => <Link className="hover:underline" {...props} />,
    blockquote: (props) => (
      <div className="prose max-w-none drop-shadow-md">
        <blockquote className="opacity-80" {...props} />
      </div>
    ),
    p: (props) => <p {...props} />,
    img: (props) => (
      <Image
        className="rounded-md drop-shadow-md my-3"
        width={4000}
        height={2000}
        alt=""
        {...props}
      />
    ),
    pre: (props) => (
      <div className="rounded-md my-3 pt-5 relative bg-[#282a36] drop-shadow-md">
        <div
          className={`tooltip tooltip-left absolute top-5 right-5 hover:opacity-80 tooltip-success`}
          data-tip={copy ? 'copied!' : 'copy'}
          onClick={(e) => {
            handleOnClick(e.currentTarget.nextElementSibling.textContent)
          }}
        >
          <MdContentCopy
            className={`h-5 w-5 ${!darkMode && 'text-base-100'}`}
          />
        </div>
        <pre {...props} />
      </div>
    ),
    code: (props) => <code {...props} />,
  }

  return { components }
}

export default MDXComponents
