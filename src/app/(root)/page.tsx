import Features from "@/components/layouts/root/Features";
import Hero from "@/components/layouts/root/Hero";
import NewsAndAnnouncements from "@/components/layouts/root/NewsAndAnnouncements";
import TeacherAndSchool from "@/components/layouts/root/TeachersAndSchool";

const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <NewsAndAnnouncements />
      <TeacherAndSchool />
    </>
  );
};
export default Home;
