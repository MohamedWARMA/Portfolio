'use client'

import { FaHtml5 , FaCss3, FaJs, FaReact, FaNodeJs  } from "react-icons/fa"
import { SiTailwindcss, SiNextdotjs} from 'react-icons/si'


const about = [
  {
    title:"About me",
    description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus a neque similique.",
    info : [
      {
        fieldName : "Name",
        fieldValue : "Warma Mohamed",
      },
      {
        fieldName : "Phone",
        fieldValue : "+226 75461377",
      },
      {
        fieldName : "Experience",
        fieldValue : "3+ years",
      },
      {
        fieldName : "Nationality",
        fieldValue : "Burkina Faso",
      },
      {
        fieldName : "Languages",
        fieldValue : "English, French",
      },
      {
        fieldName : "Email",
        fieldValue : "Mohamed.warma10@gmail.com",
      },
    ]
  }
]

function About() {
  return (
    <div>About</div>
  )
}

export default About