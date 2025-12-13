import React from "react";
import { motion } from "framer-motion";

export default function Founder() {
  return (
    <section id="founder" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Founder</h2>

        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="w-40 h-40 mx-auto rounded-full overflow-hidden shadow-lg">
            <img src="/founder.jpg" alt="Fardin Alam" className="w-full h-full object-cover" />
          </div>

          <h3 className="text-2xl font-semibold mt-4">Fardin Alam</h3>
          <p className="text-gray-600 mt-2">
            B.Tech CSE (AI & ML) — 1.5 years experience in Software Engineering & AI. Built ML pipelines, web apps, and mentored students into jobs.
          </p>

          <ul className="mt-4 text-gray-700 text-sm space-y-1 inline-block text-left">
            <li>• Expert in full-stack web apps and ML deployment</li>
            <li>• Passionate about education & career growth</li>
            <li>• Organized workshops, interview prep and portfolio reviews</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
