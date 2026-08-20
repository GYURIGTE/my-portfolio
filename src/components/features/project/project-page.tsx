import { MoveRight } from "lucide-react";

import Project1 from "@/assets/project1.jpg";
import Project2 from "@/assets/project2.jpg";
import Project3 from "@/assets/project3.jpg";
import Project4 from "@/assets/project4.jpg";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function ProjectCard() {

    const Projects = [
        {
            name: "Celestine Wheels",
            description:
                "A responsive car rental website featuring vehicle listings, rental information, booking, and reservation functionality.",
            image: Project1,
            technologies: ["HTML", "CSS"],
            link: "https://github.com/Celestine143/Celestine-Wheels.git"
        },

        {
            name: "Guide to Data Breach Survival",
            description:
                "An educational cybersecurity infographic website that explores data privacy, common cyber threats, and data-breach awareness in the Philippines.",
            image: Project2,
            technologies: ["HTML", "CSS"],
            link: "https://infographics-cybersecurity.vercel.app/"
        },

        {
            name: "KimKensel Eatery",
            description:
                "A responsive restaurant website showcasing Filipino dishes, menu offerings, and a welcoming dining experience.",
            image: Project3,
            technologies: ["HTML", "CSS"],
            link: "https://kimkensel.vercel.app/"
        },

        {
            name: "Celestine's Backyard",
            description:
                "A website created to showcase different pets, introduce their unique personalities, and give visitors a simple way to learn more about them.",
            image: Project4,
            technologies: ["React", "Tailwind CSS", "TypeScript"],
            link: "https://celestine-backyard.vercel.app/"
        },
    ];

    return (
        <section className="px-4 py-10">

            <div className="max-w-7xl mx-auto text-center mb-20 mt-30">

                <p className="text-2xl tracking-widest text-gray-600">
                    PROJECTS
                </p>

                <h2 className="text-3xl md:text-5xl font-bold mb-20">
                    My Projects
                </h2>

                <div className="space-y-15">

                    {Projects.map((project) => (

                        <Card
                            key={project.name}
                            className="group p-6 md:p-8 flex flex-col md:flex-row gap-8 transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-xl active:scale-[0.98]"
                        >

                            <div className="w-full md:w-1/2 overflow-hidden rounded-3xl">

                                <img
                                    src={project.image}
                                    alt={project.name}
                                    className="w-full h-40 md:h-80 object-cover rounded-3xl border border-gray-200 transition-transform duration-500 group-hover:scale-105"
                                />

                            </div>


                            <div className="w-full md:w-1/2 flex flex-col justify-center">

                                <h3 className="text-lg font-semibold text-gray-700 mb-3">
                                    {project.name}
                                </h3>

                                <p className="text-base text-gray-700 mb-8 text-justify px-5">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 justify-center mb-8">

                                    {project.technologies.map((tech) => (

                                        <span
                                            key={tech}
                                            className="px-3 py-1 rounded-full border border-gray-300 tracking-widest text-sm text-gray-600"
                                        >
                                            {tech}
                                        </span>

                                    ))}

                                </div>

                                <div>

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