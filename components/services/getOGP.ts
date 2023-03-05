export const getOGP = (url: string) => {
  const res = fetch(
    `https://go-http-function-3ck3ffauga-an.a.run.app/ogp?url=${url}&appid=${
      process.env.NEXT_PUBLIC_APP_ID || ''
    }`
  ).then((res) => res.json())
  return res
}
