import React from 'react'

function Header() {
  return (
    <header className='p-4 mx-2 border-b border-gray-500 flex gap-9 items-center'>
        <div className='text-xl font-bold italic'>ssstocks</div>
        <div className='flex-1'> </div>
        <div>companies</div>
        <div>github</div>
    </header>
  )
}

export default Header