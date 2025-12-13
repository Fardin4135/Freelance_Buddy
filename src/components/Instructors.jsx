import React from "react";
import InstructorCard from "./InstructorCard";

const TEACHERS = [
  { id: 1, img: "/i1.jpg", name: "Aarav Singh", exp: "5 years", bio: "Frontend specialist — React, Next.js, performance & accessibility." },
  { id: 2, img: "/i2.jpg", name: "Riya Sharma", exp: "4 years", bio: "Data scientist & ML engineer — Python, scikit-learn, model deployment." },
  { id: 3, img: "/i3.jpg", name: "Karan Patel", exp: "6 years", bio: "Cloud & DevOps — AWS certified engineer, CI/CD, infra-as-code." },
];

export default function Instructors() {
  return (
    <section id="instructors" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <h2 className="text-3xl font-bold text-center mb-6">Meet Our Instructors</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
          Experienced professionals who mentor, guide, and review your projects.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {TEACHERS.map((t) => <InstructorCard key={t.id} teacher={t} />)}
        </div>
      </div>
    </section>
  );
}
