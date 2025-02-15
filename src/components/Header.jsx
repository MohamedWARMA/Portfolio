import Link from 'next/link'
import React from 'react'
import Nav from './Nav'
import { Button } from './ui/button'
import MobileNav from './MobileNav'

function Header() {
  return (
    <header className='py-8 xl:py-12 text-white bg-white'>
        <div className='container mx-auto flex justify-between items-center '>
        
        {/* logo */}
        <Link href={'/'} className='text-2xl text-black'>
            Mohamed W<span className="text-accent">.</span>
        </Link>

        {/* desktop nav */}
         <div className='hidden xl:flex items-center gap-8'>
            <Nav/>
            <Link href={'/'}>
                <Button> Hire me</Button>
            </Link>
         </div>

         {/* Mobile nav */}
         <div className='xl:hidden'>
            <MobileNav />
         </div>


        </div>
    </header>
  )
}

export default Header