export const getOGP = (url: string) => {
  const res = fetch(
    `https://go-http-function-3ck3ffauga-an.a.run.app?url=${url}`
  ).then((res) => res.json())
  return res
}
