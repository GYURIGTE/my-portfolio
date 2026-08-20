import logo from "@/assets/logo.jpg";
import { useEffect, useState } from "react";
import { NavLink } from "react-router";
import { cn } from "@/lib/cn";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "HOME", to: "/" },
  { label: "ABOUT", to: "/about" },
  { label: "PROJECTS", to: "/project" },
];

export function Header() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const getLinkClass = (isActive: boolean) => {
    if (isActive) {
      return "text-white underline underline-offset-8";
    } else {
      return "text-white";
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-8">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div
          className={cn(
            "rounded-full px-5 flex items-center justify-between transition-all duration-300",
            isScrolled
              ? "bg-gray-900/75 backdrop-blur-md shadow-lg"
              : "bg-gray-900"
          )}
        >
          <div className="flex items-center py-1">
            <NavLink
              to="/"
              onClick={() => setIsMenuOpen(false)}
            >
              <img
                src={logo}
                alt="Logo"
                className="w-50 md:w-55 h-auto"
              />
            </NavLink>
          </div>

          {/* this one is for my dekstop navigation */}

          <nav className="hidden md:flex items-center gap-6">

            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  cn(
                    "text-lg transition-colors",
                    getLinkClass(isActive)
                  )
                }
              >
                {item.label}
              </NavLink>
            )
            )}

            <NavLink
              to="/contact"
              className="text-black rounded-full bg-white py-2 px-5 text-lg"
            >
              CONTACT ME
            </NavLink>

          </nav>

          <button
            onClick={toggleMenu}
            type="button"
            className="md:hidden text-white"
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>


        {/* this is my mobile navigation */}

        <div className={cn(
          "md:hidden mt-2 bg-gray-900 rounded-3xl px-6 py-7 shadow-lg transition-all duration-300 overflow-hidden",
          isMenuOpen
            ? "opacity-100 max-h-96"
            : "opacity-0 max-h-0 pointer-events-none"
        )}
        >
          <nav className="flex flex-col items-center gap-6">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  cn(
                    "text-lg transition-colors",
                    getLinkClass(isActive)
                  )
                }
              >
                {item.label}
              </NavLink>
            )
            )}

            <NavLink
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="text-black rounded-full bg-white py-2 px-5 text-lg"
            >
              CONTACT ME
            </NavLink>

          </nav>

        </div>

      </div>
    </header>
  )
}