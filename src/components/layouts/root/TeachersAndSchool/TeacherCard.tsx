import { Award, BookOpen, GraduationCap, Mail } from "lucide-react";

import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

import { Teacher } from "@/types/teacher";

type TeacherCardProps = {
  teacher: Teacher;
};

const TeacherCard = ({ teacher }: TeacherCardProps) => {
  return (
    <Card className="overflow-hidden py-0">
      <CardContent className="p-0">
        <div className="relative bg-gradient-to-br from-blue-50 to-indigo-100 p-6 pb-4">
          <div className="text-center">
            <div className="mx-auto mb-4 h-24 w-24 overflow-hidden rounded-full bg-white shadow-lg ring-4 ring-white">
              {teacher.image_url ? (
                <Image
                  src={teacher.image_url}
                  alt={teacher.name}
                  width={96}
                  height={96}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-blue-100 to-blue-200">
                  <GraduationCap className="text-blue-60 text-primary h-12 w-12" />
                </div>
              )}
            </div>
            <h3 className="text-xl font-bold">{teacher.name}</h3>
            <p className="text-muted-foreground text-sm font-medium">
              {teacher.position}
            </p>
            <Badge variant="default" className="bg-primary mt-2">
              {teacher.subject}
            </Badge>
          </div>
        </div>

        <div className="space-y-4 p-6">
          {teacher.bio && (
            <p className="line-clamp-3 text-sm leading-relaxed">
              {teacher.bio}
            </p>
          )}

          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm">
              <GraduationCap className="text-primary h-4 w-4 flex-shrink-0" />
              <span className="">
                Pengalaman: <strong>{teacher.experience_years} tahun</strong>
              </span>
            </div>

            {teacher.education && (
              <div className="flex items-center gap-2 text-sm">
                <BookOpen className="h-4 w-4 flex-shrink-0 text-green-500" />
                <span className="truncate">{teacher.education}</span>
              </div>
            )}
          </div>

          {teacher.specialization && teacher.specialization.length > 0 && (
            <div className="space-y-2">
              <p className="flex items-center gap-1 text-sm font-semibold">
                <span className="bg-primary h-2 w-2 rounded-full"></span>
                Spesialisasi
              </p>
              <div className="flex flex-wrap gap-1.5">
                {teacher.specialization.slice(0, 3).map((spec, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="text-primary bg-blue-50 text-xs"
                  >
                    {spec}
                  </Badge>
                ))}
                {teacher.specialization.length > 3 && (
                  <Badge variant="outline" className="border-gray-300 text-xs">
                    +{teacher.specialization.length - 3} lainnya
                  </Badge>
                )}
              </div>
            </div>
          )}

          {teacher.achievements && teacher.achievements.length > 0 && (
            <div className="space-y-2">
              <p className="flex items-center gap-1 text-sm font-semibold">
                <Award className="h-4 w-4 text-yellow-500" />
                Prestasi Terbaru
              </p>

              <div className="space-y-1">
                {teacher.achievements.slice(0, 2).map((achievement, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-yellow-400"></span>
                    <p className="text-xs leading-relaxed">{achievement}</p>
                  </div>
                ))}

                {teacher.achievements.length > 2 && (
                  <p className="pl-3.5 text-xs text-gray-500 italic">
                    +{teacher.achievements.length - 2} prestasi lainnya
                  </p>
                )}
              </div>
            </div>
          )}
        </div>

        <div className="border-t bg-gray-50 px-6 py-4">
          <Link
            href={`mailto:${teacher.email}`}
            className="flex items-center gap-3 text-sm font-medium"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100">
              <Mail className="text-primary h-4 w-4" />
            </div>
            <span className="truncate">{teacher.email}</span>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default TeacherCard;
