import { Button } from "@/components/ui/button";
import { NavLink } from "react-router";

import Profile from "@/assets/hero-banner-image.jpg";


import {
   GraduationCap,
   Code,
   Globe,
   Mail,
   FolderGit

} from "lucide-react";

export function HeroBanner() {
   return (
      <section className="px-4 pt-10 mt-30 md:mt-20">
         <div className="max-w-7xl mx-auto overflow-hidden border-b border-gray-400 mb-15">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center mb-10 md:mb-0">

               <div className="px-4 py-6 md:py-10 md:px-14">
                  <p className="text-3xl font-medium text-gray-900 mb-4">Hello, I'm</p>

                  <h1 className="text-5xl md:text-6xl mt-5  font-extrabold">Chris Lawrence</h1>


                  <div className="relative flex md:hidden justify-center items-center">

                     <div className="absolute w-70 h-70 sm:w-60 sm:h-60 md:w-[350px] md:h-[500px] bg-gray-400 rounded-full">

                     </div>

                     <img
                        src={Profile}
                        alt="Chris Lawrence Degamo"
                        className="relative z-5 w-[340px] md:w-[400px]"
                     />

                  </div>


                  <h2 className="text-lg md:text-xl mt-6 font-medium text-gray-700 flex justify-center md:justify-start">
                     BSIT Student
                     <span className="mx-2 text-gray-500">•</span>
                     <span className="text-gray-900">Web Developer</span>
                  </h2>

                  <p className="text-base text-gray-700 leading-relaxed text-justify max-w-xl mt-7">
                     I create modern, responsive, and user-friendly websites
                     while continuously improving my skills in web development.
                  </p>

                  <div className="flex items-center justify-center md:justify-start gap-3 mt-8">

                     <NavLink to="/contact">
                        <Button variant="primary" className="gap-3">Contact Me
                           <Mail size={20} />
                        </Button>
                     </NavLink>

                     <a
                        href="https://github.com/GYURIGTE"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="gap-3"
                     >
                        <Button variant="secondary">Github
                           <FolderGit size={19} />
                        </Button>
                     </a>

                  </div>

                  {/* this part is for my small description */}

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-9 mt-15">
                     <div className="text-center">
                        <GraduationCap className="mx-auto mb-3" size={30} />
                        <p className="">
                           BSIT
                        </p>

                        <p className="">
                           Program
                        </p>
                     </div>

                     <div className="text-center md:border-l border-gray-400 md:pl-9">
                        <Code className="mx-auto mb-3" size={26} />
                        <p>
                           React
                        </p>

                        <p>
                           Technology
                        </p>
                     </div>

                     <div className="text-center col-span-2 md:col-span-1 md:mx-0 mx-auto w-1/2 md:w-full md:border-l border-gray-400 md:pl-9">
                        <Globe className="mx-auto mb-3" size={26} />
                        <p>
                           Web
                        </p>

                        <p>
                           Development
                        </p>
                     </div>

                  </div>

               </div>


               <div className="relative md:flex hidden justify-center items-center ">

                  <div className="absolute w-70 h-70 md:w-[400px] md:h-[400px] bg-gray-200 rounded-full">

                  </div>
                  

                  <img
                     src={Profile}
                     alt="Chris Lawrence Degamo"
                     className="relative z-5 w-[340px] md:w-[460px]"
                  />

               </div>

            </div>
         </div>
      </section>
   )
}