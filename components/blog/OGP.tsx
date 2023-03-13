import axios from 'axios'
import { useEffect, useState } from 'react'
import { BsImageFill } from 'react-icons/bs'
import { OGPData } from 'types/types'

type Props = {
  url: string
  defaultData?: OGPData
}

const OGP = ({ url, defaultData }: Props) => {
  const [data, setData] = useState<OGPData>()
  const [load, setLoad] = useState<boolean>(false)

  useEffect(() => {
    axios.get('/api/getOGP', { params: { url: url } }).then((res) => {
      setData(res.data)
      if (res.data.title === '' || defaultData) setData(defaultData)
    })
  }, [])

  return (
    <>
      <div
        className={`${
          load && 'invisible fixed'
        } my-5 hover:bg-base-200 flex h-32 md:h-40 shadow-md border rounded-md border-slate-500 animate-pulse`}
      >
        <div>
          <BsImageFill className="h-full w-32 md:w-44 m-auto" />
        </div>
        <div className="align-middle justify-center p-2 md:p-5 flex flex-col w-full">
          <span className="w-[80%] bouder border-8 border-base-content rounded-full mb-5"></span>
          <span className="w-full bouder border-4 border-base-content rounded-full mb-2"></span>
          <span className="w-full bouder border-4 border-base-content rounded-full mb-2"></span>
          <span className="w-full bouder border-4 border-base-content rounded-full"></span>
        </div>
      </div>

      <a
        href={data?.url}
        target="_blank"
        className={`${
          !load && 'invisible fixed'
        } my-5 hover:bg-base-200 flex h-32 md:h-40 shadow-md border rounded-md border-slate-500`}
      >
        <img
          className="md:w-64 w-32 object-cover rounded-l-md"
          src={data?.image}
          alt={data?.title}
          onLoad={() => setLoad(true)}
        />
        <div className="align-middle justify-center p-2 md:p-5 flex flex-col">
          <h2 className="md:text-xl font-bold mb-3 overflow-ellipsis overflow-hidden">
            {data?.title}
          </h2>
          <p className="overflow-hidden overflow-ellipsis">
            {data?.description}
          </p>
        </div>
      </a>
    </>
  )
}

export default OGP
