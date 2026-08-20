import {
    Mail,
    FolderGit,
    MapPin
} from "lucide-react";

export function ContactHero() {

    const contactItems = [
        {
            icon: Mail,
            title: "Email",
            value: "chrislawrencedegamo182@gmail.com"
        },

        {
            icon: FolderGit,
            title: "Social",
            value: "github.com/GYURIGTE",
            link: "https://github.com/GYURIGTE"
        },

        {
            icon: MapPin,
            title: "Location",
            value: "Cordova, Cebu"
        }
    ]

    return (
        <section className="px-4 py-8">
            <div className="max-w-7xl mx-auto mt-30 border-b border-gray-400 mb-10">

                <div className="text-center mb-15">
                    <p className="tracking-widest text-2xl text-gray-600">CONTACT</p>
                </div>


                <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-30">

                    <div>

                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 mt-4 mb-6">Let's connect</h1>

                        <p className="text-xl text-justify leading-relaxed text-gray-600">
                            Have a project idea, question, or just want to say hello?
                            Feel free to reach out. I'd be happy to hear from you.
                        </p>

                        <div className="mt-10 text-center md:text-left">

                            <p className="text-xl uppercase tracking-widest text-gray-400 mb-2">
                                Currently
                            </p>

                            <p className="text-lg font-medium text-gray-700">
                                Learning • Building • Improving
                            </p>
                        </div>

                    </div>


                    <div className="w-full max-w-4xl mx-auto border border-gray-200 bg-white p-6 md:py-11 rounded-3xl mb-20 shadow-sm space-y-8
                    transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

                        {contactItems.map((item) => (

                            <div
                                key={item.title}
                                className="group flex items-center gap-4 p-5 rounded-2xl border-b border-gray-400
                                hover:bg-gray-100 hover:-translate-y-1 transition-all duration-300">

                                <div className="flex items-center justify-center w-12 h-12 shrink-0 rounded-xl border border-gray-200 bg-gray-100 
                                group-hover:bg-gray-900 group-hover:border-gray-900 transition-all duration-300">
                                    
                                    <item.icon size={25} className="text-gray-700 group-hover:text-white transition-colors duration-300"/>
                                </div>


                                <div>
                                    <p className="min-w-0 flex-1 text-xs uppercase tracking-widest text-gray-400">
                                        {item.title}
                                    </p>

                                    {item.link ? (
                                        <a
                                            href={item.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="break-all mt-1 text-base font-semibold text-gray-900 
                                            hover:text-gray-500 transition-colors duration-300"
                                        >
                                            {item.value}
                                        </a>
                                    ) : (
                                        <p className="break-all mt-1 text-base font-semibold text-gray-800">
                                            {item.value}
                                        </p>
                                    )}
                                </div>
                            </div>

                        )

                        )}

                    </div>


                </div>

            </div>
        </section>
    )
}