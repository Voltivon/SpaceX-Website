import React from 'react'

const Navbar = () => {
  return (
    <nav className="p-4 fixed top-0 left-0 right-0  z-10">
      <div className="">
        <div className="flex justify-between items-center">
          <div className="text-white font-semibold ml-10 pl-10 text-3xl">SpaceX</div>
          <ul className="flex space-x-4">
            <li className="text-white hover:text-blue-200 cursor-pointer text-xl pr-10">Launches</li>
            <li className="text-white hover:text-blue-200 cursor-pointer text-xl pr-10">Mission Statement</li>
            <li className="text-white hover:text-blue-200 cursor-pointer text-xl pr-10">Rockets</li>
            <li className="text-white hover:text-blue-200 cursor-pointer text-xl pr-10">Pilots</li>
          </ul>
        </div>
      </div>
    </nav>
  )
}


export default Navbar