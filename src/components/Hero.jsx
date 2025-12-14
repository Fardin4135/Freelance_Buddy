import React from "react";
import { motion } from "framer-motion";
import heroImage from "../assets/Landing.png";

export default function Hero() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section
      id="hero"
      className="relative flex items-center text-white overflow-hidden
                 md:min-h-[80vh] sm:min-h-screen"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0f1724]/70" />

      {/* Content Wrapper */}
      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10
                        py-14 sm:py-20">
          <div className="max-w-2xl">
            {/* Heading */}
            <motion.h1
              variants={container}
              initial="hidden"
              animate="visible"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl
                         font-bold leading-tight"
            >
              {"Start Your ".split("").map((char, index) => (
                <motion.span key={index} variants={letter}>
                  {char}
                </motion.span>
              ))}

              <span className="text-amber-400">
                {"Tech Career".split("").map((char, index) => (
                  <motion.span key={index} variants={letter}>
                    {char}
                  </motion.span>
                ))}
              </span>

              {" Today".split("").map((char, index) => (
                <motion.span key={index} variants={letter}>
                  {char}
                </motion.span>
              ))}
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="mt-4 sm:mt-5 text-sm sm:text-base text-gray-300"
            >
              Hands-on courses, live projects, industry mentors, and career
              support — built to make you job-ready.
            </motion.p>

            {/* Buttons */}
            <div className="mt-6 sm:mt-8 flex flex-wrap gap-4">
              <a
                href="#register"
                className="bg-amber-400 text-[#071021] px-6 py-3
                           rounded-md font-semibold shadow
                           hover:scale-105 transition"
              >
                Book Demo
              </a>

              <a
                href="#courses"
                className="border border-white/30 px-6 py-3
                           rounded-md hover:bg-white/10 transition"
              >
                View Courses
              </a>
            </div>

            {/* Quick Facts */}
            <div className="mt-6 sm:mt-8 text-xs sm:text-sm
                            text-gray-300 leading-relaxed">
              <strong>Quick facts:</strong> Job-oriented curriculum · Mentor
              hours · Certificates · Placement assistance
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
