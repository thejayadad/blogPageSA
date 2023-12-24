import React from 'react'
import AuthLinks from './AuthLinks'
import Logo from '../Logo/Logo'
import ThemeToggle from '../ThemeToggle/ThemeToggle'

const Navbar = () => {
  return (
    <header className='px-4 py-8'>
        <nav className='flex justify-between items-center max-w-screen-xl mx-auto'>
            <Logo />
           <div className='flex items-center gap-2'>
            <ThemeToggle />
            <AuthLinks />
           </div>
        </nav>
    </header>
  )
}

export default Navbar