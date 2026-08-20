import CpcLogo from "@/assets/cpc-logo.jpg";
import CccsLogo from "@/assets/cccs-logo.jpg";

import { Card } from "@/components/ui/card";

export function EducationAbout() {

    const Education = [
        {
            image: CccsLogo,
            school: "Cordova Catholic Cooperative School",
            year: "2018 – 2022",
            program: "Junior High School",
            description:
                "Completed Junior High School and built a strong foundation in academics, personal development, and other essential skills."
        },

        {
            image: CccsLogo,
            school: "Cordova Catholic Cooperative School",
            year: "2022 – 2024",
            program: "Science, Technology, Engineering, and Mathematics",
            description:
                "Completed Senior High School and developed foundational knowledge and skills in preparation for college."
        },

        {
            image: CpcLogo,
            school: "Cordova Public College",
            year: "2024 – Present",
            program: "Bachelor of Science in Information Technology",
            description:
                "Currently pursuing a degree in Information Technology and developing skills in programming, web development, and computer systems."
        }
    ];

    return (
        <section className="px-4 py-10">

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 md:gap-15 border-b border-gray-400">

                {Education.map((education) => (

                    <Card
                        key={`${education.school}-${education.year}`}
                        className="group py-8 mb-20 transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-xl active:scale-[0.98]"
                    >

                        <div className="flex justify-center overflow-hidden">

                            <img
                                src={education.image}
                                alt={education.school}
                                className="w-40 h-40 object-cover transition-transform duration-500 group-hover:scale-105"
                            />

                        </div>

                        <div className="text-center py-8 px-6">

                            <p className="mb-3 text-lg mt-4">
                                {education.school}
                            </p>

                            <p className="mb-10 text-sm text-gray-500">
                                {education.year}
                            </p>

                            <h3 className="mb-8 text-base font-medium text-gray-800">
                                {education.program}
                            </h3>

                            <p className="text-justify text-sm leading-relaxed text-gray-600">
                                {education.description}
                            </p>

                        </div>

                    </Card>

                ))}

            </div>

        </section>
    );
}