import { useState } from 'react'

const AnimDrawer = () => {
  const [showDrawer, setShowDrawer] = useState(false)

  const handleOnClick = () => {
    setShowDrawer(!showDrawer)
  }

  return (
    <>
      {showDrawer ? (
        <button
          className="flex relative text-4xl z-50 text-white items-center cursor-pointer"
          onClick={() => setShowDrawer(!showDrawer)}
        >
          X
        </button>
      ) : (
        <svg
          onClick={() => setShowDrawer(!showDrawer)}
          className="flex items-center cursor-pointer"
          fill="#2563EB"
          viewBox="0 0 100 80"
          width="40"
          height="40"
        >
          <rect width="100" height="10"></rect>
          <rect y="30" width="100" height="10"></rect>
          <rect y="60" width="100" height="10"></rect>
        </svg>
      )}
      <div
        className={`fixed z-40 top-0 h-screen w-screen left-0 bg-black duration-300 ease-in-out ${
          showDrawer ? 'opacity-30' : 'pointer-events-none opacity-0'
        }`}
        onClick={handleOnClick}
      ></div>

      <div
        className={`top-0 right-0 w-80 bg-blue-600  p-10 pl-20 text-white fixed h-full z-40  ease-in-out duration-300 ${
          showDrawer ? 'translate-x-0' : 'invisible translate-x-full'
        }`}
      >
        <h3 className="mt-20 text-4xl font-semibold text-white">
          I am a Drawer
        </h3>
      </div>
    </>
  )
}

export default AnimDrawer
