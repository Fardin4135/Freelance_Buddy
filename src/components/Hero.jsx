import React from "react";
import { motion } from "framer-motion";
import heroImage from '../assets/Hero.Png';
export default function Hero() {

  const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
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
  className="relative min-h-screen text-white flex items-center overflow-hidden"
>
  {/* FULL BACKGROUND IMAGE */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{ backgroundImage: `url(${heroImage})` }}
  ></div>

  {/* DARK OVERLAY (for text readability) */}
  <div className="absolute inset-0 bg-[#0f1724]/80"></div>

  {/* CONTENT */}
  <div className="relative z-10 max-w-7xl mx-auto md:mx-30 px-6 md:px-10 py-14">
    <div className="flex flex-col gap-2 mb-10 md:mb-20">
    <motion.h1
  variants={container}
  initial="hidden"
  animate="visible"
  className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight max-w-2xl"
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


    <motion.p
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.12 }}
      className="mt-6 text-gray-300 max-w-xl"
    >
      Hands-on courses, live projects, industry mentors, and career support — built to make you job-ready.
    </motion.p>
    </div>

    <div className="mt-8 flex gap-4">
      <a
        href="#register"
        className="inline-block bg-amber-400 text-[#071021] px-6 py-3 rounded font-semibold shadow hover:scale-[1.02] transition"
      >
        Book Demo
      </a>
      <a
        href="#courses"
        className="inline-block border border-white/30 px-5 py-3 rounded hover:bg-white/10"
      >
        View Courses
      </a>
    </div>

    <div className="mt-8 text-sm text-gray-300">
      <strong>Quick facts:</strong> Job-oriented curriculum · Mentor hours · Certificates · Placement assistance
    </div>
  </div>
</section>

  );
}
