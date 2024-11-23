import CourseCategories from "./components/CoursesCategory";
import Header from "./components/Header";
import HeroSection from "./components/Hero";
import AchievementsSection from "./components/Achievements";
import CoursesSection from "./components/Courses";
import TeamSection from "./components/TeamSection";
import TestimonialsSection from "./components/TestimonialsSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <CourseCategories/>
      <AchievementsSection />
      <CoursesSection />
      <TeamSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
}
