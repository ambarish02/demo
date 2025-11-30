import React from 'react'

function Header() {
  return (
    <header className="bg-gray-800 text-gray-100 shadow-md h-16 flex items-center px-6 ">
      <div className="container mx-auto flex items-center justify-between">
        <div className='flex items-center space-x-3'>
        <img className='w-14 h-14 rounded-full transition-transform duration-300 hover:scale-110' src="/images/logo.png" alt="" />
    </div>
      <nav>
        <ul className='flex space-x-6 text-gray-300 font-medium'>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
        </ul>
      </nav>
    </div>
    </header>
  )
}

export default Header
