import React from "react";
import { Link } from "react-scroll";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur shadow">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-indigo-600 rounded flex items-center justify-center text-white font-bold">YFB</div>
          <div>
            <div className="text-lg font-bold text-indigo-600">YourFreelanceBuddy</div>
            <div className="text-xs text-gray-500 -mt-0.5">Learn. Build. Launch.</div>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
          <Link to="hero" smooth duration={500} className="cursor-pointer hover:text-indigo-600">Home</Link>
          <Link to="courses" smooth duration={500} className="cursor-pointer hover:text-indigo-600">Courses</Link>
          <Link to="instructors" smooth duration={500} className="cursor-pointer hover:text-indigo-600">Instructors</Link>
          <Link to="founder" smooth duration={500} className="cursor-pointer hover:text-indigo-600">Founder</Link>
          <Link to="register" smooth duration={500} className="cursor-pointer hover:text-indigo-600">Register</Link>
        </nav>

        <div className="md:hidden text-sm text-gray-700">Menu</div>
      </div>
    </header>
  );
}
