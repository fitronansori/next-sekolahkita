import { Megaphone, Newspaper } from 'lucide-react';

import SectionHeader from '@/components/common/SectionHeader';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import AnnouncementsSection from './AnnouncementsSection';
import NewsSection from './NewsSection';

const NewsAndAnnouncements = () => {
  return (
    <section className="py-10 lg:py-14">
      <div className="container space-y-8">
        {/* Header */}
        <SectionHeader
          title="Berita & Pengumuman"
          description="Tetap update dengan informasi terbaru dan pengumuman penting dari sekolah"
          highlighted_text="Berita"
        />

        {/* Tabs */}
        <Tabs defaultValue="news" className="w-full">
          <div className="flex justify-center">
            <TabsList className="bg-muted grid h-12 w-full max-w-md grid-cols-2 rounded-lg p-1">
              <TabsTrigger
                value="news"
                className="data-[state=active]:bg-background data-[state=active]:text-foreground rounded-md text-sm font-medium transition-all data-[state=active]:shadow-sm"
              >
                <div className="flex items-center gap-2">
                  <Newspaper />
                  <span>Berita Terbaru</span>
                </div>
              </TabsTrigger>
              <TabsTrigger
                value="announcements"
                className="data-[state=active]:bg-background data-[state=active]:text-foreground rounded-md text-sm font-medium transition-all data-[state=active]:shadow-sm"
              >
                <div className="flex items-center gap-2">
                  <Megaphone />
                  <span>Pengumuman</span>
                </div>
              </TabsTrigger>
            </TabsList>
          </div>

          {/* News Content */}
          <TabsContent value="news" className="mt-8">
            <NewsSection />
          </TabsContent>

          {/* Announcements Content */}
          <TabsContent value="announcements" className="mt-8">
            <AnnouncementsSection />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default NewsAndAnnouncements;
