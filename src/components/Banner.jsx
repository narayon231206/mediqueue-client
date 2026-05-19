"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1280&auto=format&fit=crop",
      title: "Unlock Your Potential with Expert Medical Tutors",
      description: "Connect with top-rated medical instructors for personalized one-on-one learning sessions tailored to your curriculum.",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?q=80&w=1280&auto=format&fit=crop",
      title: "Master Complex Medical Subjects with Ease",
      description: "From Anatomy to Physiology, find specialized tutors who simplify difficult concepts and help you excel in your exams.",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?q=80&w=1280&auto=format&fit=crop",
      title: "Seamless Booking for Your Medical Education",
      description: "No more scheduling conflicts. Book your slots instantly and manage your learning journey with our organized system.",
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="relative h-[400px] md:h-[550px] w-full overflow-hidden">
      <div 
        className="flex transition-transform duration-700 ease-in-out h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="min-w-full h-full relative">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4">
              <h1 className="text-3xl md:text-5xl font-bold text-white max-w-4xl leading-tight">
                {slide.title}
              </h1>
              <p className="mt-4 text-gray-200 text-lg md:text-xl max-w-2xl">
                {slide.description}
              </p>
              <Link
                href="/tutors"
                className="mt-8 bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all transform hover:scale-105"
              >
                Find Tutors
              </Link>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 p-2 rounded-full text-white transition backdrop-blur-sm"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 p-2 rounded-full text-white transition backdrop-blur-sm"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 transition-all rounded-full ${
              currentSlide === index ? "w-8 bg-blue-600" : "w-2 bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}