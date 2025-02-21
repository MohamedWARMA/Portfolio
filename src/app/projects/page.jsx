'use client'

import React, {useState} from 'react'
import { motion } from 'framer-motion'
import {Swiper, SwiperSlide} from "swiper/react"
import "swiper/css"

import { BsArrowUpRight, BsGithub } from 'react-icons/bs' 

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";


const projects = [ 
  {
    num : '01',
    category: 'full-stack',
    title: 'restaurant',
    description : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus a neque similique',
    image : '/',
    live :'warma-mohamed.onrender.com',
    github:'github.com/MohamedWARMA',
    stack:[
      {
        name:'Html5'
      },
      {
        name:'Css3'
      },
      {
        name:'Javascript'
      },
      {
        name:'Django'
      },
    ]
  }
]

function Projects() {
  const [project, setProject] = useState(projects[0]);
  return (
    <div className='text-center mt-10'>Under Development</div>
  )
}

export default Projects