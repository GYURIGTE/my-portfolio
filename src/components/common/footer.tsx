import {
    CalendarDays,
    Clock,
    Phone,
    Mail,
    MapPin,
} from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-6 py-8">
                <div className="gap-10">
                    
                     <div className="border-b border-gray-700 pb-8">
                       <h3 className="text-xl font-semibold mb-5">Contact</h3>

                       <div className="flex flex-wrap items-center gap-8">
                        <p className="flex items-center gap-3">
                            <CalendarDays size={25} />
                            Monday - Sunday
                        </p>

                        <p className="flex items-center gap-3">
                            <Clock size={25} />
                            08:00 AM - 5:00 PM
                        </p>

                        <p className="flex items-center gap-3">
                            <Phone size={25} />
                            09324072741
                        </p>

                        <p className="flex items-center gap-3">
                            <Mail size={25} />
                            chrislawrencedegamo182@gmail.com
                        </p>

                        <p className="flex items-center gap-3">
                            <MapPin size={25} />
                            Cordova, Cebu
                        </p>
                       </div>
                     </div>

                
                    <div className="pt-8">
                        <p className="text-sm text-gray-500 text-center sm:text-left">
                            © {new Date().getFullYear()} My Portfolio. All rights reserved.
                        </p>
                    </div>
                
                </div>
            </div>
        </footer>
    )
}
