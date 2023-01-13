import SwapTheme from '@/SwapTheme'
import Link from 'next/link'

const Navbar = () => {
  return (
    <>
      <div className="navbar backdrop-blur-md bg-base-100/60 border-b border-base-200 top-0 sticky z-50 w-screen">
        <div className="flex-1">
          <Link
            href="/"
            scroll={false}
            className="btn btn-ghost normal-case text-xl"
          >
            Jarigyani
          </Link>
        </div>
        <div className="flex-none gap-2">
          <div>
            <SwapTheme />
          </div>
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://avatars.githubusercontent.com/u/98578563?v=4" />
            </div>
          </label>
        </div>
      </div>
    </>
  )
}

export default Navbar
