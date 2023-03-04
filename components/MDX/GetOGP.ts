export const getOGP = async (url: string) => {
  try {
    const res = await fetch(`jariogp.jp/?url=${url}`)
    const data = await res.json()
    return data
  } catch (err) {
    console.error(err)
    return null
  }
}
