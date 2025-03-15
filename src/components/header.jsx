import React from 'react'
import boost from '../assets/boost.png'

function Header() {
  return (
    <>
    <header className="w-full flex justify-between items-center px-6  bg-gray-900">
    <div className="text-2xl md:text-3xl sm:text-4xl lg:text-2xl font-extrabold text-gradient ml-6">AspireEdge</div>
        <button className="p-2.5 px-3 bg-rose-200 text-rose-900 text-lg font-bold rounded-md mt-8 flex items-center ring-4 ring-rose-300/50 hover:bg-rose-300 transition-all ease-in-out"><img src={boost} className='w-7 mr-2 '></img>Boost Business</button>
    </header>
    </>
  )
}

export default Header;