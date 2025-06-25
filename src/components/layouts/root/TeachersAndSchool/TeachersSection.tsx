import { Users } from "lucide-react";

import Link from "next/link";

import { getTeachers } from "@/lib/data";

import { Button } from "@/components/ui/button";

import TeacherCard from "./TeacherCard";

const TeachersSection = async () => {
  const teachersData = await getTeachers();

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="mb-4 text-2xl font-bold lg:text-3xl">
          <Users className="mr-2 inline h-6 w-6" />
          Tim Pendidik
        </h2>
        <p className="text-gray-600">
          Guru berpengalaman yang berdedikasi untuk pendidikan terbaik.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {teachersData.slice(0, 6).map((item) => (
          <TeacherCard key={item.id} teacher={item} />
        ))}
      </div>

      {/* CTA */}
      <div className="text-center">
        <Button asChild size="lg">
          <Link href="/teachers">Lihat Semua Guru</Link>
        </Button>
      </div>
    </div>
  );
};

export default TeachersSection;
