import PreCircle from '@/MDX/PreCircle'
import { useEffect, useState } from 'react'
import { MdContentCopy } from 'react-icons/md'
import { useStore } from 'store'

const wpshell = () => {
  const [select, setSelect] = useState('g000c0000')
  const { darkMode, copy, changeCopy } = useStore()
  const [text, setText] = useState('')
  const { setDnsName } = useStore()

  useEffect(() => {
    text ? setDnsName(text) : setDnsName(select)
  }, [select, text])

  const handleOnChange = (value) => {
    setText(value)
  }

  const handleOnClick = (e) => {
    navigator.clipboard
      .writeText(e)
      .then(changeCopy)
      .then(setTimeout(changeCopy, 2000))
  }

  return (
    <>
      <select
        className="mt-3 select mr-2 select-bordered w-full max-w-xs"
        defaultValue="g000c0000"
        onChange={(e) => {
          setSelect(e.target.value)
          setText('')
        }}
      >
        <option disabled>g000c0000</option>
        <option>g019c1164</option>
        <option>g019c1408</option>
        <option>g020c1005</option>
        <option>g020c1008</option>
        <option>g020c1011</option>
        <option>g020c1013</option>
        <option>g020c1018</option>
        <option>g020c1027</option>
        <option>g020c1038</option>
        <option>g020c1040</option>
        <option>g020c1045</option>
        <option>g020c1051</option>
        <option>g020c1054</option>
        <option>g020c1057</option>
        <option>g020c1066</option>
        <option>g020c1075</option>
        <option>g020c1076</option>
        <option>g022c6009</option>
        <option>g022c6010</option>
        <option>g022c6014</option>
      </select>
      <input
        type="text"
        placeholder="違うDNSレコード使いたい方はこちら"
        className="input input-bordered w-full max-w-xs"
        value={text}
        onChange={(e) => {
          handleOnChange(e.target.value)
        }}
      />
      <div className="rounded-md my-3 pt-3 relative bg-[#282a36] drop-shadow-md">
        <div className="ml-5 mt-2 flex gap-2">
          <PreCircle color="r" />
          <PreCircle color="y" />
          <PreCircle color="g" />
        </div>

        <div
          className={`tooltip tooltip-left absolute top-5 right-5 hover:opacity-80 tooltip-success`}
          data-tip={copy ? 'copied!' : 'copy'}
          onClick={(e) => {
            handleOnClick(e.currentTarget.nextElementSibling?.textContent)
          }}
        >
          <MdContentCopy
            className={`h-5 w-5 ${!darkMode && 'text-base-100'}`}
          />
        </div>
        <pre className="language-shell">
          <code className="language-shell">
            bash ~/dcwp.sh {text ? text : select}
          </code>
        </pre>
      </div>
    </>
  )
}

export default wpshell
