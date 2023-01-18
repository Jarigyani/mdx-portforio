import { useState } from 'react'
import { FaHamburger } from 'react-icons/fa'
import { ImCross } from 'react-icons/im'
import Toc from './Toc'

const Drawer = () => {
  const [show, setShow] = useState(false)

  const handleOnChange = () => {
    setShow(!show)
    console.log('Drawer')
  }

  return (
    <div className="md:hidden">
      <label className="swap swap-rotate z-50">
        <input type="checkbox" onChange={handleOnChange} checked={show} />
        <ImCross className="h-8 w-8 swap-on" />
        <FaHamburger className="h-8 w-8 swap-off" />
      </label>
      <div
        className={`fixed z-40 h-screen w-80 top-0 right-0 bg-base-100 ease-in-out duration-300 ${
          show ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="pt-20 px-5">
          <Toc />
        </div>
      </div>
      <div
        className={`fixed top-0 left-0 z-30 w-screen h-screen bg-base-100  duration-300 pointer-events-none ${
          show ? 'opacity-50 pointer-events-auto' : 'opacity-0'
        }`}
        onClick={handleOnChange}
      />
    </div>
  )
}

export default Drawer
