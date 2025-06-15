import SectionHeader from "@/components/common/SectionHeader";

import SchoolProfile from "./SchoolProfile";
import TeachersSection from "./TeachersSection";

const TeachersAndSchool = () => {
  return (
    <section className="py-10 lg:py-14">
      <div className="container space-y-8">
        {/* Section Header */}
        <SectionHeader
          title="Tenaga Pendidik & Profil Sekolah"
          highlighted_text="Tenaga Pendidik"
          description="Bertemu dengan tim pendidik berpengalaman dan pelajari tentang sekolah kami."
        />

        {/* School Profile Component */}
        <SchoolProfile />

        {/* Teachers Section Component */}
        <TeachersSection />
      </div>
    </section>
  );
};

export default TeachersAndSchool;
