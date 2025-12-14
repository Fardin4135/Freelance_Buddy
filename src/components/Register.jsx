import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function Register() {
  const [status, setStatus] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      course: "Frontend Development",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (data) => {
    setStatus("Sending...");

    try {
      const res = await fetch("https://formspree.io/f/mkgdkrny", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("Successfully Registered!");
        reset();
      } else {
        setStatus("Error submitting form. Try again later.");
      }
    } catch (err) {
      setStatus("Network error. Try again.");
    }
  };

  return (
    <section
      id="register"
      className="py-8 lmd:py-18 lg:py-24 bg-[#0B1220] text-white border-t"
    >
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-3">
          Register / Enquiry
        </h2>

        <p className="text-center text-gray-400 mb-10">
          Fill the form and our team will reach out within 24 hours.
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white/5 backdrop-blur border border-white/10 
                     rounded-2xl p-8 shadow-lg space-y-5"
        >
          {/* Name & Email */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <input
                type="text"
                placeholder="Full name"
                {...register("name", {
                  required: "Name is required",
                  minLength: { value: 3, message: "Name must be at least 3 characters" },
                })}
                className={`w-full p-3 rounded-lg bg-transparent border 
                ${errors.name ? "border-red-500" : "border-white/20"} 
                focus:outline-none focus:border-amber-400`}
              />
              {errors.name && (
                <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
              )}
            </div>

            <div>
              <input
                type="email"
                placeholder="Email address"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email address",
                  },
                })}
                className={`w-full p-3 rounded-lg bg-transparent border 
                ${errors.email ? "border-red-500" : "border-white/20"} 
                focus:outline-none focus:border-amber-400`}
              />
              {errors.email && (
                <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>
          </div>

          {/* Course & Phone */}
          <div className="grid md:grid-cols-2 gap-4">
            <select
              {...register("course")}
              className="w-full p-3 rounded-lg bg-[#0B1220] 
                         border border-white/20 text-gray-300
                         focus:outline-none focus:border-amber-400"
            >
              <option>Frontend Development</option>
              <option>AI Tools & Generative AI</option>
              <option>Python AI & ML</option>
              <option>Web Designing</option>
            </select>

            <div>
              <input
                type="text"
                placeholder="Phone (optional)"
                {...register("phone", {
                  pattern: {
                    value: /^[6-9]\d{9}$/,
                    message: "Invalid Indian phone number",
                  },
                })}
                className={`w-full p-3 rounded-lg bg-transparent border 
                ${errors.phone ? "border-red-500" : "border-white/20"} 
                focus:outline-none focus:border-amber-400`}
              />
              {errors.phone && (
                <p className="text-red-400 text-sm mt-1">{errors.phone.message}</p>
              )}
            </div>
          </div>

          {/* Message */}
          <div>
            <textarea
              rows="4"
              placeholder="Message (optional)"
              {...register("message")}
              className="w-full p-3 rounded-lg bg-transparent border border-white/20
                         focus:outline-none focus:border-amber-400"
            />
          </div>

          {/* Submit & Status */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-amber-400 text-[#071021] px-8 py-3 rounded-lg 
                         font-semibold hover:scale-105 transition
                         disabled:opacity-60"
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>

            {status && (
              <p
                className={`text-sm font-medium ${
                  status.toLowerCase().includes("success")
                    ? "text-green-400"
                    : status.toLowerCase().includes("sending")
                    ? "text-amber-400"
                    : "text-red-400"
                }`}
              >
                {status}
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
