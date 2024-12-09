import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {Accordion,AccordionContent, AccordionItem,AccordionTrigger} from "@/components/ui/accordion"

import CU from "../assets/cu.svg"
import School from "../assets/school.svg"



const Education = () => {
  return (
    
       <div className='main-container p-4'>
<h3>Education</h3>

  <Accordion type="single" collapsible>
    <AccordionItem value="item-1">
      <div className="flex items-center justify-between border-0">
        <div className="flex items-center space-x-3">
          <Avatar className="w-14 h-14 border border-gray-400">
            <AvatarImage src={CU} alt="Avatar Image" className="object-contain" />
            <AvatarFallback>CU</AvatarFallback>
          </Avatar>
          <div>
            <AccordionTrigger className="text-sm font-semibold flex items-center space-x-2 group p-0 hover:no-underline">
              <span className="hover:underline-none">Bachelor of Computer Applications</span>
            </AccordionTrigger>
            <p className="mt-0 text-sm text-gray-600">Chandigarh University</p>
          </div>
        </div>
        <div className="text-right">
          <p className="mt-0 text-sm text-gray-600"><i>Pursuing
          </i></p>
        </div>
      </div>
      <AccordionContent className="mt-5">
        <span>

      Currently enrolled in the Computer Application program at Chandigarh University, with a focus on software development.
        </span>
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-2">
      <div className="flex items-center justify-between border-0">
        <div className="flex items-center space-x-3">
          <Avatar className="w-14 h-14 border border-gray-400 ">
            <AvatarImage src={School} alt="Avatar Image" className="object-contain" />
            <AvatarFallback>GSS</AvatarFallback>
          </Avatar>
          <div>
            <AccordionTrigger className="text-sm font-semibold flex items-center space-x-2 group p-0 hover:no-underline">
              <span className="hover:underline-none">Govt. Sen. Sec School</span>
            </AccordionTrigger>
            <p className="mt-0 text-sm text-gray-600">Dholbaha, Hoshiarpur, Punjab</p>
          </div>
        </div>
        <div className="text-right">
          <p className="mt-0 text-sm text-gray-600">Completed 2018</p>
        </div>
      </div>
      <AccordionContent className="mt-5">
      Completed Senior Secondary Education (10+2) at Govt. Senior Secondary School, Dholbaha, Hoshiarpur, Punjab. The focus was on comprehensive development, including academic subjects and extracurricular activities.
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-3">
      <div className="flex items-center justify-between border-0">
        <div className="flex items-center space-x-3">
          <Avatar className="w-14 h-14  border border-gray-400">
            <AvatarImage src={School} alt="Avatar Image" className="object-contain" />
            <AvatarFallback>GHS</AvatarFallback>
          </Avatar>
          <div>
            <AccordionTrigger className="text-sm font-semibold flex items-center space-x-2 group p-0 hover:no-underline">
              <span className="hover:underline-none">Govt. High School</span>
            </AccordionTrigger>
            <p className="mt-0 text-sm text-gray-600">Manhota, Hoshiarpur, Punjab</p>
          </div>
        </div>
        <div className="text-right">
          <p className="mt-0 text-sm text-gray-600">Completed 2016</p>
        </div>
      </div>
      <AccordionContent className="mt-5">
      Completed High School at Govt. High School, Manhota, Hoshiarpur, Punjab. Gained a solid foundation in core subjects, preparing for further studies with a strong emphasis on academic excellence.
      </AccordionContent>
    </AccordionItem>
  </Accordion>



        </div>



   
  )
}

export default Education
