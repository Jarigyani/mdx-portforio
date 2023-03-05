import { getOGP } from '@/services/getOGP'
import { useEffect, useState } from 'react'
import { OGPData } from 'types/types'

type Props = {
  url: string
  defaultData?: OGPData
}

const OGP = ({ url, defaultData }: Props) => {
  const [data, setData] = useState<OGPData>()

  useEffect(() => {
    getOGP(url).then((data) => {
      setData(data)
      if (data.title === '' || defaultData) setData(defaultData)
    })
  }, [])

  useEffect(() => {
    console.log(data)
  }, [data])

  return (
    <a
      href={data?.url}
      target="_blank"
      className="my-5 hover:bg-base-200 flex h-40 shadow-md border rounded-md border-slate-500"
    >
      <img
        className="md:w-64 w-32 object-cover"
        src={data?.image}
        alt={data?.title}
      />
      <div className="align-middle justify-center p-5 flex flex-col">
        <h2 className="md:text-xl font-bold mb-3 overflow-ellipsis">
          {data?.title}
        </h2>
        <p className="overflow-hidden overflow-ellipsis">{data?.description}</p>
      </div>
    </a>
  )
}

export default OGP
