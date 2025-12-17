import React from "react";
import { motion } from "framer-motion";
import founderImage from "../assets/My_img.jpg";
import coFounderImage from "../assets/co_founder.jpeg"; // add image

const people = [
  {
    name: "Fardin Alam",
    role: "Founder & Lead Mentor",
    image: founderImage,
    bio: `B.Tech CSE (AI & ML) with 1.5+ years of experience in Software Engineering
          & Artificial Intelligence. Built scalable web apps, ML pipelines,
          and mentored students into real-world tech roles.`,
    points: [
      "Expert in web apps, AI tools & ML deployment",
      "Passionate about education & career growth",
      "Conducted workshops, interview prep & portfolio reviews",
    ],
  },
  {
    name: "Shahid Raza",
    role: "Co-Founder & Tech Strategist",
    image: coFounderImage,
    bio: `B.Tech CSE (AI & ML) with 1.5+ years of experience in Software Engineering
          & Artificial Intelligence.
          Focused on building reliable platforms and guiding teams
          towards production-ready solutions.`,
    points: [
      "Strong in backend systems & architecture",
      "Product-focused mindset",
      "Experienced in team leadership & scaling",
    ],
  },
];

export default function Founder() {
  return (
    <section
      id="founder"
      className="py-8 md:py-18 lg:py-24 bg-[#0B1220] text-white border-t"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Meet the Founders</h2>

        <p className="text-gray-400 max-w-2xl mx-auto mb-12">
          Building industry-ready developers through practical learning and mentorship.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {people.map((person, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur border border-white/10 
                         rounded-2xl p-8 shadow-lg"
            >
              {/* Image */}
              <div className="w-40 h-40 mx-auto rounded-full overflow-hidden 
                              border-4 border-amber-400 shadow-xl">
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Name */}
              <h3 className="text-2xl font-semibold mt-5">{person.name}</h3>

              {/* Role */}
              <p className="text-amber-400 font-medium mt-1">
                {person.role}
              </p>

              {/* Bio */}
              <p className="text-gray-300 mt-4 leading-relaxed">
                {person.bio}
              </p>

              {/* Highlights */}
              <ul className="mt-6 text-gray-300 text-sm space-y-2 
                             inline-block text-left">
                {person.points.map((point, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-amber-400">✔</span>
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
