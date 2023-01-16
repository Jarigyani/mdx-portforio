import Image from 'next/image'
import Link from 'next/link'
import { MdContentCopy } from 'react-icons/md'
import { useStore } from 'store'
import PreCircle from './PreCircle'

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
      <>
        <h1
          id={props.children}
          className="scroll-mt-20 border-b-2 border-base-200 mt-8 mb-5 pb-2 text-3xl break-words"
          {...props}
        />
      </>
    ),
    h2: (props) => (
      <h2
        id={props.children}
        className="scroll-mt-16 my-3 text-2xl"
        {...props}
      />
    ),
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
        className="rounded-md drop-shadow-md mx-auto my-3"
        width={860}
        height={860}
        alt=""
        {...props}
      />
    ),
    pre: (props) => (
      <div className="rounded-md my-3 relative bg-base-200 drop-shadow-md">
        <div className="ml-5 pt-5 flex gap-2 mb-2">
          <PreCircle color="r" />
          <PreCircle color="y" />
          <PreCircle color="g" />
        </div>
        <div
          className={`tooltip tooltip-left absolute top-4 right-5 hover:opacity-80 tooltip-success`}
          data-tip={copy ? 'copied!' : 'copy'}
          onClick={(e) => {
            handleOnClick(e.currentTarget.nextElementSibling.textContent)
          }}
        >
          <MdContentCopy
            className={`h-5 w-5 ${!darkMode && 'text-base-100'}`}
          />
        </div>
        <div className="pt-3 pb-5 mr-5 overflow-x-scroll">
          <pre className="ml-5 bg-base-200" {...props} />
        </div>
      </div>
    ),
    code: (props) => <code className="bg-base-200" {...props} />,
  }

  return { components }
}

export default MDXComponents
