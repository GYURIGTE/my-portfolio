import { NavLink } from "react-router";
import { MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import AboutImage from "@/assets/about-hero.jpg";

export function AboutHero() {
    return (
        <section className="px-4 py-10">
            <div className="max-w-7xl mx-auto pb-15 border-b border-gray-400 mt-30">
                <div className="text-center mb-15">
                    <p className="text-2xl tracking-widest text-gray-600 mb-3">ABOUT ME</p>

                    <h2 className="text-3xl md:text-5xl ">Get to know me</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    <div className="flex justify-center">
                        <img
                            src={AboutImage}
                            alt="Chris Lawrence Degamo"
                            className="w-80 md:w-[400px] rounded-4xl"
                        />
                    </div>

                    <div className="text-justify space-y-10 text-gray-700 text-lg">
                        <p className="leading-relaxed">Hi, I'm <span className="font-bold">Chris Lawrence Degamo</span>, an aspiring IT
                            professional who enjoys creating websites and
                            learning new technologies.
                        </p>

                        <p className="leading-relaxed">I enjoy turning ideas into clean, simple, and
                            user-friendly websites. I'm continuously improving
                            my skills in web development, especially in
                            <span className="font-bold"> React </span>, 
                            <span className="font-bold"> TypeScript </span>, and 
                            <span className="font-bold"> Tailwind CSS </span>.
                        </p>

                        <p className="leading-relaxed"> I'm always curious to learn, explore new ideas,
                            and take on projects that help me grow as a
                            developer.
                        </p>

                        <div className="flex justify-center md:justify-start mt-8">

                            <NavLink to="/project">
                                <Button variant="primary" className="gap-3">
                                    View Projects
                                    <MoveRight />
                                </Button>
                            </NavLink>

                        </div>

                    </div>
                </div>


            </div>
        </section>
    )
}