"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { FaGraduationCap, FaDollarSign, FaClock, FaLocationDot } from "react-icons/fa6";

export default function TutorsSection() {
  const [tutors, setTutors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/tutors")
      .then((res) => res.json())
      .then((data) => {
        setTutors(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching tutors:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20 bg-white dark:bg-gray-900">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <section className="py-16 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Available Medical Tutors</h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">Connect with expert medical mentors to clear your concepts and boost your clinical knowledge.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tutors.map((tutor) => (
            <div key={tutor._id} className="flex flex-col bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl overflow-hidden hover:shadow-lg transition duration-300 h-full">
              <div className="h-60 w-full relative bg-gray-200 dark:bg-gray-700 shrink-0">
                <img
                  src={tutor.image}
                  alt={tutor.name}
                  className="w-full h-full object-cover object-top"
                />
                <span className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm">
                  {tutor.subject}
                </span>
              </div>

              <div className="p-6 flex flex-col flex-grow justify-between">
                <div className="space-y-3.5">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white line-clamp-1">{tutor.name}</h3>
                  
                  <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center gap-2.5">
                      <FaGraduationCap className="text-blue-600 dark:text-blue-500 text-base shrink-0" />
                      <span className="line-clamp-1">{tutor.institution}</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <FaLocationDot className="text-blue-600 dark:text-blue-500 text-base shrink-0" />
                      <span>{tutor.location}</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <FaClock className="text-blue-600 dark:text-blue-500 text-base shrink-0" />
                      <span>{tutor.duration || "60 min"} per Session</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-200/60 dark:border-gray-700/60 flex items-center justify-between">
                  <div className="flex items-center text-gray-800 dark:text-white">
                    <FaDollarSign className="text-blue-600 dark:text-blue-500 text-lg -mr-0.5" />
                    <span className="text-xl font-extrabold tracking-tight">{tutor.price}</span>
                    <span className="text-xs text-gray-500 dark:text-gray-400 ml-1">/ session</span>
                  </div>
                  <Link
                    href={`/tutors/${tutor._id}`}
                    className="bg-blue-600 text-white text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-blue-700 transition shadow-sm"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}