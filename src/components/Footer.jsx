import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#0B1220] text-gray-300 pt-16 border-t">
      <div
        className="
          max-w-7xl mx-auto px-6
          grid gap-10 md:grid-cols-4
          text-center md:text-left
        "
      >
        {/* Brand / About */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-xl font-bold text-white mb-3">
            Tech Academy
          </h3>
          <p className="text-sm leading-relaxed max-w-xs">
            Job-focused tech training with real-world projects, mentorship,
            and placement guidance. Learn skills that companies actually hire for.
          </p>
        </div>

        {/* Courses */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="text-lg font-semibold text-white mb-3">
            Popular Courses
          </h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-amber-400 transition">Frontend Development</li>
            <li className="hover:text-amber-400 transition">AI Tools & Generative AI</li>
            <li className="hover:text-amber-400 transition">Python AI & ML</li>
            <li className="hover:text-amber-400 transition">DevOps & Cloud</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="text-lg font-semibold text-white mb-3">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#courses" className="hover:text-amber-400 transition">Courses</a></li>
            <li><a href="#instructors" className="hover:text-amber-400 transition">Instructors</a></li>
            <li><a href="#founder" className="hover:text-amber-400 transition">Founder</a></li>
            <li><a href="#register" className="hover:text-amber-400 transition">Register</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="text-lg font-semibold text-white mb-3">
            Contact Us
          </h4>
          <p className="text-sm mb-2">
            📍 Bokaro Co-operative Colony, Jharkhand
          </p>
          <p className="text-sm mb-2">
            📧 info@techacademy.example
          </p>
          <p className="text-sm">
            📞 +91 00000 00000
          </p>
        </div>
      </div>

      {/* Map */}
      <div className="mt-12 px-6">
        <div className="max-w-7xl mx-auto rounded-2xl overflow-hidden border border-white/10">
          <iframe
            title="Bokaro Location"
            src="https://www.google.com/maps?q=Bokaro%20Cooperative%20Colony&output=embed"
            className="w-full h-[260px] grayscale hover:grayscale-0 transition"
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 border-t border-white/10 py-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Tech Academy — Built by{" "}
        <span className="text-amber-400 font-medium">Fardin Alam</span>
      </div>
    </footer>
  );
}
