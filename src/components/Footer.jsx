"use client";
import Link from "next/link";
import { FaStethoscope, FaEnvelope, FaPhone, FaLocationDot, FaFacebookF, FaXTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 text-gray-600 dark:text-gray-300 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-center md:text-left">
          
          <div className="flex flex-col items-center md:items-start space-y-4">
            <div className="flex items-center gap-2">
              <FaStethoscope className="h-7 w-7 text-blue-600 dark:text-blue-500" />
              <span className="text-lg font-bold text-gray-800 dark:text-white tracking-tight">
                Medi<span className="text-blue-600 dark:text-blue-500">Queue</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed max-w-sm">
              A premium tutor booking platform dedicated to helping medical students connect with expert instructors effortlessly.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-gray-800 dark:text-white font-semibold text-sm uppercase tracking-wider">
              Learning Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/tutors" className="hover:text-blue-600 dark:hover:text-blue-500 transition block">Anatomy Tutors</Link></li>
              <li><Link href="/tutors" className="hover:text-blue-600 dark:hover:text-blue-500 transition block">Physiology Tutors</Link></li>
              <li><Link href="/tutors" className="hover:text-blue-600 dark:hover:text-blue-500 transition block">Biochemistry Tutors</Link></li>
              <li><Link href="/tutors" className="hover:text-blue-600 dark:hover:text-blue-500 transition block">Pathology Lectures</Link></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-gray-800 dark:text-white font-semibold text-sm uppercase tracking-wider">
              Contact Info
            </h3>
            <ul className="space-y-3 text-sm flex flex-col items-center md:items-start">
              <li className="flex items-center gap-2">
                <FaLocationDot className="text-blue-600 dark:text-blue-500 shrink-0" />
                <span>Dhaka, Bangladesh</span>
              </li>
              <li className="flex items-center gap-2">
                <FaPhone className="text-blue-600 dark:text-blue-500 shrink-0" />
                <span>+880 1234-567890</span>
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope className="text-blue-600 dark:text-blue-500 shrink-0" />
                <span>support@mediqueue.com</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4 flex flex-col items-center md:items-start">
            <h3 className="text-gray-800 dark:text-white font-semibold text-sm uppercase tracking-wider">
              Follow Us
            </h3>
            <div className="flex items-center gap-5 text-xl">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-500 transition bg-gray-50 dark:bg-gray-800 p-2 rounded-full shadow-sm hover:shadow" aria-label="Facebook">
                <FaFacebookF className="text-base" />
              </a>
              <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-500 transition bg-gray-50 dark:bg-gray-800 p-2 rounded-full shadow-sm hover:shadow" aria-label="X (formerly Twitter)">
                <FaXTwitter className="text-base" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-500 transition bg-gray-50 dark:bg-gray-800 p-2 rounded-full shadow-sm hover:shadow" aria-label="LinkedIn">
                <FaLinkedinIn className="text-base" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-500 transition bg-gray-50 dark:bg-gray-800 p-2 rounded-full shadow-sm hover:shadow" aria-label="YouTube">
                <FaYoutube className="text-base" />
              </a>
            </div>
          </div>

        </div>

        <div className="border-t border-gray-100 dark:border-gray-800 mt-12 pt-6 text-center text-xs text-gray-500 dark:text-gray-400">
          <p>&copy; {new Date().getFullYear()} MediQueue. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}