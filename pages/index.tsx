import { useStore } from 'store'

const index = () => {
  const darkMode = useStore((state) => state.darkMode)
  const changeDarkMode = useStore((state) => state.changeDarkMode)

  return (
    <div className="btn" onClick={changeDarkMode}>
      {darkMode ? 'light' : 'dark'}
    </div>
  )
}

export default index
