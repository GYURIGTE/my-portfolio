import { MoveRight } from "lucide-react";

import AboutImage from "@/assets/about-me-image.jpg";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router";


export function AboutSection() {
    return (

        <section className="px-4 py-3">
            <div className="max-w-7xl mx-auto border-b border-gray-400 mb-10">

                <div className="text-center mb-12">

                    <p className="text-2xl tracking-widest text-gray-600">ABOUT ME</p>

                    <h2 className="text-3xl md:text-5xl font-bold mt-3 ">A little about me</h2>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20 mt-20">
                    <div className="flex justify-center ">

                        <img
                            src={AboutImage}
                            alt="AboutImage"
                            className="w-72 md:w-100 rounded-4xl"
                        />

                    </div>

                    <div className="text-justify">

                        <p className="text-2xl md:text-4xl font-semibold mb-15">Hi, I'm Chris Lawrence.</p>

                        <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                            I'm a BSIT student with an interest in web
                            development. I enjoy creating modern,
                            responsive, and user-friendly websites while
                            continuously improving my technical skills.
                        </p>

                        <p className="text-gray-700 mb-12 text-lg">
                            I'm currently learning and working with
                            technologies such as React, Tailwind CSS,
                            JavaScript, and other web development tools.
                        </p>


                        <div className="flex justify-center md:justify-start">
                          <NavLink to="/about">
                              <Button
                            variant="primary"
                            className="gap-3"

                        >
                            Read More
                            <MoveRight size={18} />
                        </Button>
                          </NavLink>
                        </div>

                    </div>
                </div>

            </div>
        </section>

    )
}