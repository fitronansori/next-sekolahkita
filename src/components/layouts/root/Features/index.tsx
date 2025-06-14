import Link from 'next/link';

import SectionHeader from '@/components/common/SectionHeader';
import FeatureStats from '@/components/layouts/root/Features/FeatureStats';
import { Button } from '@/components/ui/button';

import { features_data } from '@/constants/data';

import FeatureCard from './FeatureCard';

const Features = () => {
  return (
    <section className="bg-gray-50/50 py-10 lg:py-14">
      <div className="container space-y-8">
        {/* Section Header */}
        <SectionHeader
          title="Mengapa Memilih Sekolah Kami?"
          highlighted_text="Sekolah Kami"
          description="Komitmen kami adalah memberikan pendidikan terbaik dengan fasilitas modern, tenaga pendidik berkualitas, dan program unggulan untuk masa depan cerah anak-anak."
        />
        {/* Features Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features_data.map((feature) => (
            <FeatureCard
              key={feature.id}
              id={feature.id}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              cta_text={feature.cta_text}
              cta_link={feature.cta_link}
              highlights={feature.highlights}
            />
          ))}
        </div>
        {/* Stats Section */}
        <FeatureStats />
        {/* Call to Action */}
        <div className="text-center">
          <h3 className="mb-4 text-2xl font-bold">
            Siap Bergabung dengan Keluarga Besar Kami?
          </h3>
          <p className="text-muted-foreground mx-auto mb-6 max-w-2xl">
            Dapatkan informasi lengkap tentang pendaftaran dan program unggulan
            kami.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/kontak">Hubungi Kami</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/profil">Pelajari Lebih Lanjut</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
