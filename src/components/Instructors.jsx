import React from "react";
import InstructorCard from "./InstructorCard";
import instructorImage1 from "../assets/Aarav.jpg";
import instructorImage2 from "../assets/Riya.png";
import instructorImage3 from "../assets/My_img.jpg";

const TEACHERS = [
  {
    id: 1,
    img: instructorImage3,
    name: "Fardin Alam",
    exp: "1.5 years",
    bio: "Frontend specialist — React, Next.js, performance & accessibility.",
  },
  {
    id: 2,
    img: instructorImage2,
    name: "Riya Sharma",
    exp: "4 years",
    bio: "Data scientist & ML engineer — Python, scikit-learn, model deployment.",
  },
  {
    id: 3,
    img: instructorImage1,
    name: "Aarav Singh",
    exp: "6 years",
    bio: "Cloud & DevOps — AWS certified engineer, CI/CD, infra-as-code.",
  },
];

export default function Instructors() {
  return (
    <section id="instructors" className="py-8 lmd:py-18 lg:py-24 bg-[#0B1220] text-white border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Meet Our Instructors
        </h2>

        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-14">
          Experienced professionals who mentor, guide, and review your projects.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {TEACHERS.map((t) => (
            <InstructorCard key={t.id} teacher={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
