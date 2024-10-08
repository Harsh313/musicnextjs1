import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import MusicSchoolTestimonials from "@/components/TestimonialCards";
import UpcomingWebinars from "@/components/UpcomingWebinar";
import WhyChooseUS from "@/components/WhyChooseUS";


export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.2]">
      
      <HeroSection/>
      <FeaturedCourses/>
      <WhyChooseUS/>
      <MusicSchoolTestimonials/>
      <UpcomingWebinars/>
      <Instructors/>
    </main>
  );
}
