import { MoveRight } from "lucide-react";

import Project1 from "@/assets/project1.jpg";
import Project2 from "@/assets/project2.jpg";
import Project3 from "@/assets/project3.jpg";
import Project4 from "@/assets/project4.jpg";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function ProjectSection() {

    const Projects = [
        {
            name: "Celestine Wheels",
            description:
                "A responsive car rental website featuring vehicle listings, rental information, booking, and reservation functionality.",
            image: Project1,
            link: "https://github.com/Celestine143/Celestine-Wheels.git"
        },

        {
            name: "Guide to Data Breach Survival",
            description:
                "An educational cybersecurity infographic website that explores data privacy, common cyber threats, and data-breach awareness in the Philippines.",
            image: Project2,
            link: "https://infographics-cybersecurity.vercel.app/"
        },

        {
            name: "KimKensel Eatery",
            description:
                "A responsive restaurant website showcasing Filipino dishes, menu offerings, and a welcoming dining experience.",
            image: Project3,
            link: "https://kimkensel.vercel.app/"
        },

        {
            name: "Celestine's Backyard",
            description:
                "A website created to showcase different pets, introduce their unique personalities, and give visitors a simple way to learn more about them.",
            image: Project4,
            link: "https://celestine-backyard.vercel.app/"
        },
    ];

    return (
        <section className="px-4 py-10">

            <div className="max-w-7xl mx-auto text-center mb-20">

                <p className="text-2xl tracking-widest text-gray-600">
                    PROJECTS
                </p>

                <h2 className="text-3xl md:text-5xl font-bold mb-20">
                    My Projects
                </h2>


                <div className="grid grid-cols-1 md:grid-cols-3 gap-15">

                    {Projects.map((project) => (

                        <Card
                            key={project.name}
                            className="group p-0 flex flex-col h-full transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-xl active:scale-[0.98]"
                        >

                            <div className="h-52 p-5 mt-8 overflow-hidden">

                                <img
                                    src={project.image}
                                    alt={project.name}
                                    className="w-full h-full object-cover rounded-3xl border border-gray-200 transition-transform duration-500 group-hover:scale-105"
                                />

                            </div>


                            <div className="p-6 flex flex-col flex-1 mb-8">

                                <h3 className="text-lg font-semibold text-gray-700 mb-3">
                                    {project.name}
                                </h3>

                                <p className="text-base text-gray-700 mb-10 text-justify px-5 leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="mt-auto">

                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Button
                                            variant="primary"
                                            className="gap-3"
                                        >
                                            View Project
                                            <MoveRight size={18} />
                                        </Button>
                                    </a>

                                </div>

                            </div>

                        </Card>

                    ))}

                </div>

            </div>

        </section>
    );
}