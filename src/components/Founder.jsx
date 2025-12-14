import React from "react";
import { motion } from "framer-motion";
import founderImage from "../assets/My_img.jpg";

export default function Founder() {
  return (
    <section
      id="founder"
      className="py-8 lmd:py-18 lg:py-24 bg-[#0B1220] text-white border-t"
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Meet the Founder
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto mb-10">
          Building industry-ready developers through practical learning and mentorship.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white/5 backdrop-blur border border-white/10 
                     rounded-2xl p-8 shadow-lg"
        >
          {/* Image */}
          <div className="w-40 h-40 mx-auto rounded-full overflow-hidden 
                          border-4 border-amber-400 shadow-xl">
            <img
              src={founderImage}
              alt="Fardin Alam"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Name */}
          <h3 className="text-2xl font-semibold mt-5">
            Fardin Alam
          </h3>

          {/* Role */}
          <p className="text-amber-400 font-medium mt-1">
            Founder & Lead Mentor
          </p>

          {/* Bio */}
          <p className="text-gray-300 mt-4 leading-relaxed">
            B.Tech CSE (AI & ML) with 1.5+ years of experience in Software Engineering
            & Artificial Intelligence. Built scalable web apps, ML pipelines,
            and mentored students into real-world tech roles.
          </p>

          {/* Highlights */}
          <ul className="mt-6 text-gray-300 text-sm space-y-2 
                         inline-block text-left">
            <li className="flex gap-2">
              <span className="text-amber-400">✔</span>
              Expert in web apps, AI tools & ML deployment
            </li>
            <li className="flex gap-2">
              <span className="text-amber-400">✔</span>
              Passionate about education & career growth
            </li>
            <li className="flex gap-2">
              <span className="text-amber-400">✔</span>
              Conducted workshops, interview prep & portfolio reviews
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
