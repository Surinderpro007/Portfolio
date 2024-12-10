import React from 'react'
import { Badge } from "@/components/ui/badge"

const Skills = () => {
  return (
    <div className='main-container p-4 text-white'>
     <h3>Skills</h3>
       <Badge  className="px-2 py-1 m-1 bg-black">HTML</Badge>
       <Badge  className="px-2 py-1 m-1 bg-black">CSS</Badge>
       <Badge  className="px-2 py-1 m-1 bg-black">JavaScript</Badge>
       <Badge  className="px-2 py-1 m-1 bg-black">React Js</Badge>
       <Badge  className="px-2 py-1 m-1 bg-black">Redux Toolkit</Badge>
       <Badge  className="px-2 py-1 m-1 bg-black">JQuery</Badge>
       <Badge  className="px-2 py-1 m-1 bg-black">Bootstrap</Badge>
       <Badge  className="px-2 py-1 m-1 bg-black">Tailwind css</Badge>
       <Badge  className="px-2 py-1 m-1 bg-black">Wordpress</Badge>
       <Badge  className="px-2 py-1 m-1 bg-black s">Github</Badge>
    </div> 

  )
}

export default Skills
