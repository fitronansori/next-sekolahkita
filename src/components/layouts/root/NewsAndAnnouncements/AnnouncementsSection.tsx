import { ChevronRight } from 'lucide-react';

import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import { latest_announcements } from '@/constants/data';

import AnnouncementCard from './AnnouncementCard';

const AnnouncementsSection = () => {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {/* Urgent Announcements */}
      <div className="space-y-4 lg:col-span-2">
        {latest_announcements
          .filter((announcement) => announcement.is_urgent)
          .slice(0, 1)
          .map((announcement) => (
            <AnnouncementCard
              key={announcement.id}
              announcement={announcement}
              variant="full"
            />
          ))}

        {/* Regular Announcements */}
        {latest_announcements
          .filter((announcement) => !announcement.is_urgent)
          .slice(0, 2)
          .map((announcement) => (
            <AnnouncementCard
              key={announcement.id}
              announcement={announcement}
              variant="full"
            />
          ))}
      </div>

      {/* Announcements Summary */}
      <div className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Pengumuman Lainnya</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {latest_announcements.slice(0, 4).map((announcement) => (
              <AnnouncementCard
                key={announcement.id}
                announcement={announcement}
                variant="summary"
              />
            ))}
          </CardContent>
        </Card>

        <Button className="w-full" asChild>
          <Link href="/">
            Lihat Semua Pengumuman
            <ChevronRight size={16} className="ml-1" />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default AnnouncementsSection;
