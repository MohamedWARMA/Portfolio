"use client"

import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const mylinks = [
  {
    name:"home",
    path:"/",
  },
  {
    name:"about",
    path:"/about",
  },
  {
    name:"services",
    path:"/services",
  },
  {
    name:"projets",
    path:"/projects",
  },
  {
    name:"contact",
    path:"/contact",
  },
 
] 

function Nav() {
  const pathname = usePathname();
  return (
    <nav className='flex gap-8 text-black'>
      {mylinks.map((link, index) => {
       return(
        <Link 
          href={link.path} 
          key={index} 
          className={`${
            link.path === pathname && "text-accent border-b-2 border-accent"
            } capitalize font-medium hover:text-accent transition-all`}
            >
              {link.name} 
        </Link>
       )
      })}
    </nav>
  )
}

export default Nav