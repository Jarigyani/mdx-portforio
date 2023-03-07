import axios from 'axios'
import { NextApiRequest, NextApiResponse } from 'next'
import { OGPData } from 'types/types'

const getOGP = async (req: NextApiRequest, res: NextApiResponse) => {
  const { url } = req.query

  const axiosResponse = await axios.request<OGPData>({
    url: `https://go-http-function-3ck3ffauga-an.a.run.app/ogp`,
    params: {
      url: url,
      appid: process.env.APP_ID || '',
    },
  })

  const ogp = axiosResponse.data

  // data.status !== 200 &&
  //   res.status(500).json({ message: 'Internal Server Error' })

  res.status(200).json(ogp)
}

export default getOGP
