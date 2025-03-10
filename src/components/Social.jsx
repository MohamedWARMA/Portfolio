import Link from "next/link"
import { FaGithub, FaLinkedin, } from "react-icons/fa"

const socials = [
    { icon: <FaGithub/>, path:"https://github.com/MohamedWARMA"},
    { icon: <FaLinkedin/>, path:"https://linkedIn.com/in/mohamed-warma"},
]

function Social({ containerStyles, iconStyles}) {
  return (
    <div className={containerStyles}>
        {socials.map((item, index) => {
            return <Link key={index} href={item.path} className={iconStyles}>
                {item.icon}
                </Link>
        })}
    </div>
    
  )
}

export default Social