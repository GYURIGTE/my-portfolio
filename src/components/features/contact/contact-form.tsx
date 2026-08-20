import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ContactForm () {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    return (
        <section className="px-4 py-8 mb-20">
            <div className="max-w-7xl mx-auto">

               <div className="mb-10 text-center md:text-left">
                <p className="tracking-widest text-2xl text-gray-600">SEND A MESSAGE</p>
               </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-20">

                    <div className="order-2 md:order-1">
                        <form className="border border-gray-400 rounded-4xl p-10 space-y-10 transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-xl active:scale-[0.98]">
                            <div>
                                <label className="block mb-2">
                                    Name
                                </label>

                                <input 
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)} 
                                placeholder="Your name"
                                className="w-full border-b border-gray-400 py-3 outline-none focus:border-black"
                                />
                            </div>

                            <div>
                                <label className="block mb-2">
                                    Email
                                </label>

                                <input 
                                type="text"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)} 
                                placeholder="your@email.com"
                                className="w-full border-b border-gray-400 py-3 outline-none focus:border-black"
                                />
                            </div>

                            <div>
                                <label className="block mb-2">
                                    Subject
                                </label>

                                <input 
                                type="text"
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)} 
                                placeholder="What's this about?"
                                className="w-full border-b border-gray-400 py-3 outline-none focus:border-black"
                                />
                            </div>

                            <div>
                                <label className="block mb-2">
                                    Message
                                </label>

                                <input 
                                type="text"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)} 
                                placeholder="Write your message..."
                                className="w-full border-b border-gray-400 py-3 outline-none resize:none focus:border-black"
                                />
                            </div>
                          
                          <Button variant="primary" className="gap-4 mx-auto flex items-center">
                            Send Message
                            <ArrowUpRight size={20}/>
                          </Button>
                            
                        </form>
                    </div>

                    <div className="flex flex-col justify-center order-1 md:order-2">
                        <p className="tracking-widest mb-5 text-gray-600">LET'S WORK TOGETHER</p>

                        <h2 className="text-5xl md:text-6xl mb-5">Have something in mind?</h2>

                        <p className="text-lg leading-relaxed text-gray-600 text-justify"> Whether you have a project idea, a question,
                            or simply want to connect, feel free to send me
                            a message.</p>


                    </div>
                   


                </div>
            </div>
        </section>
    )
}