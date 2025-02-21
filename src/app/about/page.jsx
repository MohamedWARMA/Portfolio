'use client'

import { FaHtml5 , FaCss3, FaJs, FaReact, FaNodeJs, FaPython, FaDatabase, FaTerminal, FaJava, FaCoffee, FaCode, FaDocker  } from "react-icons/fa"
import { SiTailwindcss, SiNextdotjs} from 'react-icons/si'


const about =
  {
    title:"About me",
    description:"",
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
        fieldValue : "< 3 years",
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
      {
        fieldName : "Freelance",
        fieldValue : "Avalaible",
      },
    ]
  }
;

const experience = {
  icon : '',
  title: "My experience",
  description : '',
  items:[
    {
      company: 'Freelance',
      position:'Full Stack Developper',
      duration: "2022 - Now"
    },
  ]
}

const education = {
  icon : '',
  title: "My education / certifications",
  description : '',
  items:[
    {
      institute: 'New Dawn University',
      degree:'Bachelor\'s Degree in Software Engineering',
      duration: "2022 - 2025"
    },

    {
      institute: 'IBM course on Coursera',
      degree:'Full-stack Software Engineering Certification',
      duration: "2022 - 2025"
    },
  ]
}

const skills = {
 
  title: "My skills",
  description : '',
  skillist:[
    {
      icon: <FaHtml5/>,
      name:'HTML5',
    },
    {
      icon: <FaCss3/>,
      name:'CSS3',
    },
    {
      icon: <FaJs/>,
      name:'Javascript',
    },
    {
      icon: <FaReact/>,
      name:'ReactJS',
    },
    {
      icon: <SiNextdotjs/>,
      name:'NextJS',
    },
    {
      icon: <SiTailwindcss/>,
      name:'Taillwind.css',
    },

    {
      icon: <FaNodeJs/>,
      name:'NodeJS',
    },

    {
      icon: <FaPython/>,
      name:'Python',
    },

    {
      icon: <FaDatabase/>,
      name:'SQL',
    },
    {
      icon: <FaTerminal/>,
      name:'Bash',
    },
       
  ]
}

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import  {ScrollArea} from "@/components/ui/scroll-area"
import { animate, motion } from "framer-motion";


function About() {
  return (
    <motion.div
    initial={{opacity:0}}
    animate={{
        opacity:1,
        transition:{ delay:2.4, duration:0.4 , ease:"easeIn"},
    }}
    className="min-h-[80vh] flex items-center justify-center py-12 xl:py-8 mt-7"
    >
      <div className="container mx-auto">
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[300px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-black/60 mx-auto xl:mx-0">{experience.description}</p>

                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return(
                       
                        <li key={index} className="bg-[#ffff] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[240px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-black">{item.company}</p>
                          </div>
                        </li>
                      )
                    })}                  
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-black/60 mx-auto xl:mx-0">{education.description}</p>

                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return(
                       
                        <li key={index} className="bg-[#ffff] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[300px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-black">{item.institute}</p>
                          </div>
                        </li>
                      )
                    })}                  
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-black mx-auto xl:mx-0 ">{skills.description }</p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillist.map((skill, index) => {
                    return <li key={index}>
                      <TooltipProvider delayDuration={50}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-[#ffff] rounded-xl flex justify-center items-center group">
                            <div className="text-6xl group-hover:text-accent transition-all duration-300 text-[#8eaaaa]">
                              {skill.icon}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize">{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  })}
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-black text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-black/60 mx-auto xl:mx-0">{about.description}</p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                      <span className="text-black/70">{item.fieldName}</span>
                      <span className="text-xl">{item.fieldValue}</span>
                    </li>
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>

    </motion.div>
  )
}

export default About