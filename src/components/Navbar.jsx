"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Stethoscope, ChevronDown, LogOut, User, Sun, Moon } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50 border-b border-gray-100 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          <div className="flex items-center gap-2">
            <Stethoscope className="h-8 w-8 text-blue-600 dark:text-blue-500" />
            <span className="text-xl font-bold text-gray-800 dark:text-white tracking-tight">
              Medi<span className="text-blue-600 dark:text-blue-500">Queue</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-6 font-medium text-gray-600 dark:text-gray-300">
            <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-500 transition">Home</Link>
            <Link href="/tutors" className="hover:text-blue-600 dark:hover:text-blue-500 transition">Tutors</Link>
            
            {isLoggedIn && (
              <>
                <Link href="/add-tutor" className="hover:text-blue-600 dark:hover:text-blue-500 transition">Add Tutor</Link>
                <Link href="/my-tutors" className="hover:text-blue-600 dark:hover:text-blue-500 transition">My Tutors</Link>
                <Link href="/my-booked-sessions" className="hover:text-blue-600 dark:hover:text-blue-500 transition">My Booked Sessions</Link>
              </>
            )}

            <button 
              onClick={toggleTheme} 
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
              aria-label="Toggle Theme"
            >
              {isDarkMode ? <Sun className="h-5 w-5 text-amber-500" /> : <Moon className="h-5 w-5" />}
            </button>

            {!isLoggedIn ? (
              <div className="flex items-center gap-3">
                <Link href="/login" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-500 transition">Login</Link>
                <Link href="/register" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                  Register
                </Link>
              </div>
            ) : (
              <div className="relative">
                <button 
                  onClick={() => setIsProfileOpen(!isProfileOpen)} 
                  className="flex items-center gap-2 focus:outline-none"
                >
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop"
                    alt="User Profile"
                    className="h-9 w-9 rounded-full object-cover ring-2 ring-blue-600/20"
                  />
                  <ChevronDown className="h-4 w-4 text-gray-500" />
                </button>

                {isProfileOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-xl shadow-xl py-2 z-50">
                    <Link 
                      href="/profile" 
                      onClick={() => setIsProfileOpen(false)}
                      className="flex items-center gap-2 px-4 py-2.5 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition"
                    >
                      <User className="h-4 w-4" /> Profile Page
                    </Link>
                    <button 
                      onClick={() => {
                        setIsLoggedIn(false);
                        setIsProfileOpen(false);
                      }}
                      className="w-full flex items-center gap-2 px-4 py-2.5 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/30 text-left transition border-t border-gray-100 dark:border-gray-700 mt-1"
                    >
                      <LogOut className="h-4 w-4" /> Logout
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="md:hidden flex items-center gap-2">
            <button 
              onClick={toggleTheme} 
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 mr-1"
            >
              {isDarkMode ? <Sun className="h-5 w-5 text-amber-500" /> : <Moon className="h-5 w-5" />}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 dark:text-gray-300 focus:outline-none">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 px-4 pt-2 pb-4 space-y-2 font-medium">
          <Link href="/" className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-500 py-2">Home</Link>
          <Link href="/tutors" className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-500 py-2">Tutors</Link>
          
          {isLoggedIn ? (
            <>
              <Link href="/add-tutor" className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-500 py-2">Add Tutor</Link>
              <Link href="/my-tutors" className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-500 py-2">My Tutors</Link>
              <Link href="/my-booked-sessions" className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-500 py-2">My Booked Sessions</Link>
              <div className="border-t border-gray-100 dark:border-gray-800 pt-2 mt-2">
                <Link href="/profile" className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-500 py-2">
                  <User className="h-4 w-4" /> Profile Page
                </Link>
                <button 
                  onClick={() => {
                    setIsLoggedIn(false);
                    setIsOpen(false);
                  }}
                  className="w-full flex items-center gap-2 text-red-600 dark:text-red-400 py-2 text-left"
                >
                  <LogOut className="h-4 w-4" /> Logout
                </button>
              </div>
            </>
          ) : (
            <div className="flex flex-col gap-2 pt-2 border-t border-gray-100 dark:border-gray-800">
              <Link href="/login" className="block text-center text-gray-700 dark:text-gray-300 hover:text-blue-600 py-2">Login</Link>
              <Link href="/register" className="block text-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                Register
              </Link>
            </div>
          )}
        </div>
      )}
    </nav>
  );
}