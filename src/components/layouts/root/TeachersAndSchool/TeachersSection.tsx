import { GraduationCap, Mail, Users } from "lucide-react";

import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import { teachers_data } from "@/constants/data";

const TeachersSection = () => {
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

      {/* Simple Teachers Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {teachers_data.slice(0, 6).map((teacher) => (
          <Card
            key={teacher.id}
            className="shadow-md transition-shadow hover:shadow-lg"
          >
            <CardContent className="p-6">
              <div className="mb-4 text-center">
                <div className="mx-auto mb-3 h-20 w-20 overflow-hidden rounded-full bg-blue-100">
                  {teacher.photo_url ? (
                    <Image
                      src={teacher.photo_url}
                      alt={teacher.name}
                      width={80}
                      height={80}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center">
                      <GraduationCap className="h-10 w-10 text-blue-600" />
                    </div>
                  )}
                </div>
                <h3 className="text-lg font-bold">{teacher.name}</h3>
                <p className="text-sm text-gray-600">{teacher.position}</p>
                <p className="text-sm text-blue-600">{teacher.subject}</p>
              </div>
              <div className="mb-4 space-y-2">
                <p className="text-xs text-gray-600">{teacher.bio}</p>
                <p className="text-xs text-gray-500">
                  Pengalaman: {teacher.experience_years} tahun
                </p>
              </div>
              <div className="border-t pt-3">
                <a
                  href={`mailto:${teacher.email}`}
                  className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800"
                >
                  <Mail className="h-4 w-4" />
                  <span className="truncate">{teacher.email}</span>
                </a>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center">
        <Button asChild size="lg">
          <Link href="/guru">Lihat Semua Guru</Link>
        </Button>
      </div>
    </div>
  );
};

export default TeachersSection;
