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
        className="scroll-mt-16 mt-5 mb-3 text-2xl border-b-2 border-base-200 pb-2 break-words"
        {...props}
      />
    ),
    h3: (props) => <h3 className="my-2 text-xl scroll-mt-16" {...props} />,
    table: (props) => (
      <div className="overflow-x-auto my-5">
        <table
          className="drop-shadow-md overflow-auto table text-center"
          {...props}
        />
      </div>
    ),
    a: (props) => <Link className="hover:underline" {...props} />,
    p: (props) => <p {...props} />,
    img: (props) => (
      <Image
        className="rounded-md drop-shadow-md mx-auto my-5"
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
        <div className="pt-3">
          <pre className="px-5 pb-5 bg-base-200 overflow-x-scroll" {...props} />
        </div>
      </div>
    ),
    code: (props) => <code className="bg-base-200" {...props} />,
    blockquote: (props) => (
      <blockquote
        className="opacity-80 border-l-4 border-base-300 my-2 pl-2"
        {...props}
      />
    ),
  }

  return { components }
}

export default MDXComponents
