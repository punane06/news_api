'use client'

import Link from 'next/link'
import LogOut from './LogOut'

const Navbar = () => {
  return (
    <nav className='text-white z-10 p-4 bg-gray-700  top-0 w-full fixed'>
        <div className='container mx-auto flex justify-between items-center'>
            <a href="/" className='text-2xl font-bold'>News</a>
            <div>
                <Link href={'/'} className='mx-2 hover:text-gray-300'>LogIn</Link>
                <LogOut />
            </div>
        </div>
    </nav>
  )
}

export default Navbar