import {
    Code2,
    Palette,
    Atom,
    Braces,
    Server,
    FolderGit,
} from "lucide-react";

export function SkillSection() {

    const Skills = [
        { name: "HTML & CSS", percentage: 80, icon: Code2 },
        { name: "React", percentage: 65, icon: Atom },
        { name: "Tailwind CSS", percentage: 65, icon: Palette },
        { name: "JavaScript", percentage: 45, icon: Braces },
        { name: "Laravel", percentage: 45, icon: Server },
        { name: "GitHub", percentage: 50, icon: FolderGit },
    ];

    return (
        <section className="px-4 py-10">
            <div className="max-w-7xl mx-auto border-b border-gray-300 pb-16">

                <div className="text-center mb-14">
                    <p className="text-sm md:text-base tracking-[0.3em] font-medium text-gray-500">
                        SKILLS
                    </p>

                    <h2 className="text-3xl md:text-5xl font-bold mt-3 text-gray-900">
                        My Skills
                    </h2>

                    <p className="text-gray-500 mt-5 max-w-2xl mx-auto leading-relaxed">
                        Here are some of the technologies and tools I am currently learning and using.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {Skills.map((Skill) => {
                        const Icon = Skill.icon;

                        return (
                            <div
                                key={Skill.name}
                                className="group p-6 rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">

                                <div className="flex items-center justify-between mb-5">

                                    <div className="flex items-center gap-4">

                                        <div className="flex items-center justify-center w-11 h-11 rounded-xl 
                                        bg-gray-100 group-hover:bg-gray-900 transition-colors duration-300">

                                            <Icon
                                                size={21}
                                                className="text-gray-700 group-hover:text-white transition-colors duration-300" />

                                        </div>

                                        <div>
                                            <p className="font-semibold text-gray-900">
                                                {Skill.name}
                                            </p>

                                            <p className="text-xs text-gray-500 mt-1">
                                                Currently learning
                                            </p>
                                        </div>

                                    </div>

                                    <span className="text-sm font-semibold text-gray-500">
                                        {Skill.percentage}%
                                    </span>

                                </div>

                                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-gray-900 rounded-full transition-all duration-700 group-hover:bg-gray-700"
                                        style={{ width: `${Skill.percentage}%` }} />
                                </div>

                            </div>
                        );
                    })}

                </div>

            </div>
        </section>
    );
}