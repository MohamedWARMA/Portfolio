'use client'

import { BsArrowDownRight } from 'react-icons/bs'
import {motion} from 'framer-motion'
import Link from 'next/link'

const services = [
  {
    num:'01',
    title:'Front-End Development',
    description:'Front-End Development using HTML5,CSS3,JAVASCRIPT and REACT',
    href:''
  },
  {
    num:'02',
    title:'Back-End Development',
    description:'Back-End Development using Python, SQL and Django',
    href:''
  },
  {
    num:'03',
    title:'Container et orchestration',
    description:'Docker and Kubernete',
    href:''
  },
    
]


function Services() {
  return (
    <section className='min-h-[80vh] flex flex-col justify-center py-12 xl:py-0 mt-4 mb-4'>
      <div className='container mx-auto'>
      <motion.div
        initial={{opacity:0}}
        animate={{
            opacity:1,
            transition:{ delay:2.4, duration:0.4 , ease:"easeIn"},
        }}
        className='grid grid-cols-1 md:grid-cols-2 gap-[60px]'
      >
        {services.map((service, index) => {
           return( 
           <div key={index} className='flex-1 flex flex-col justify-center gap-6 group bg-white p-4'>
              <div className='w-full flex justify-between items-center'>
                <div className='text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-75'>{service.num }</div>
                <Link href={service.href} className='w-[70px] h-[70px] rounded-full bg-[#629298] group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45'>
                  <BsArrowDownRight className='text-white text-xl' />
                </Link>
              </div>
              <h2 className='text-[42px] font-bold leading-none text-[#485355] group-hover:text-accent transition-all duration-500'>{service.title}</h2>
              <p className='text-[#070707]'>{service.description}</p>
              <div className='border-b border-gray-300 w-full '></div>
           </div>)
        })}

      </motion.div>
      </div>
    </section>
  )
}

export default Services