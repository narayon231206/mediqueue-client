import Banner from "@/components/Banner";
import TutorsSection from "@/components/TutorsSection";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300 overflow-x-hidden">
      <div className="w-full max-w-8xl mx-auto">
        <Banner />
        <TutorsSection />
      </div>
    </main>
  );
}