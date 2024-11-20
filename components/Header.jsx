import Link from 'next/link'
import React from 'react'

function Header() {
	return (
		<header className='sticky backdrop-blur-sm z-30 top-0 p-4 mx-2 border-b border-gray-500 flex gap-9 items-center'>
			<div className='text-xl font-bold italic'><Link href='/'>ssstocks</Link></div>
			<div className='flex-1'> </div>
			<div><Link href='/companies'>companies</Link></div>
			<div><Link href='https://github.com/PrateekTh/ssstocks' rel="noopener noreferrer" target="_blank">github</Link></div>
		</header>
	)
}

export default Header