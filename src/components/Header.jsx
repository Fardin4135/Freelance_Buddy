import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";

const navItems = [
  { id: "hero", label: "Home" },
  { id: "courses", label: "Courses" },
  { id: "instructors", label: "Instructors" },
  { id: "founder", label: "Founder" },
  { id: "register", label: "Register" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <>
      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full z-50 bg-[#0A1020]/90 backdrop-blur border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-10 py-3">

          {/* LOGO */}
          <div className="flex items-center gap-3 cursor-pointer">
            <div className="w-10 h-10 bg-amber-400 rounded-md flex items-center justify-center text-[#071021] font-bold">
              FB
            </div>
            <div className="leading-tight">
              <div className="text-lg font-bold text-amber-400">
               freelanceBuddy
              </div>
              <div className="text-xs text-gray-400">
                Learn. Build. Launch.
              </div>
            </div>
          </div>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-6 md:gap-12 lg:pr-20 text-sm font-medium text-white">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.id}
                smooth
                duration={500}
                offset={-80}
                spy
                activeClass="text-amber-400"
                className="cursor-pointer transition hover:text-amber-400"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* HAMBURGER */}
          <button
            onClick={() => setOpen((prev) => !prev)}
            className="md:hidden text-white text-2xl focus:outline-none"
            aria-label="Toggle Menu"
          >
            ☰
          </button>
        </div>
      </header>

      {/* OVERLAY */}
      <div
        className={`fixed inset-0 bg-black/60 z-40 transition-opacity duration-300 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setOpen(false)}
      />

      {/* MOBILE MENU */}
      <aside
        className={`fixed top-0 right-0 h-full w-[80%] max-w-sm bg-[#0A1020] z-50 transform transition-transform duration-300
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* CLOSE BUTTON */}
        <div className="flex justify-end p-5">
          <button
            onClick={() => setOpen(false)}
            className="text-amber-400 text-2xl"
            aria-label="Close Menu"
          >
            ✕
          </button>
        </div>

        {/* MOBILE NAV */}
        <nav className="flex flex-col gap-6 px-6 text-lg font-medium text-amber-400">
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.id}
              smooth
              duration={500}
              offset={-80}
              onClick={() => setOpen(false)}
              className="cursor-pointer transition hover:text-amber-400"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>

      {/* HEADER SPACER */}
      <div className="h-[72px]" />
    </>
  );
}
