import { Award, GraduationCap, User } from "lucide-react";

import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Teacher } from "@/types/teacher";

interface TeacherCardProps {
  teacher: Teacher;
}

const TeacherCard = ({ teacher }: TeacherCardProps) => {
  return (
    <Card className="transition-shadow hover:shadow-lg">
      <CardHeader>
        <div className="flex items-center gap-3">
          {teacher.image_url ? (
            <Image
              src={teacher.image_url}
              alt={teacher.name}
              width={48}
              height={48}
              className="rounded-full object-cover"
            />
          ) : (
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-200">
              <User className="h-6 w-6 text-gray-500" />
            </div>
          )}
          <div>
            <CardTitle className="text-lg">{teacher.name}</CardTitle>
            <p className="text-sm text-gray-600">{teacher.email}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {teacher.position && (
            <div className="flex items-center gap-2">
              <GraduationCap className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-medium">{teacher.position}</span>
            </div>
          )}

          {teacher.subject && (
            <div>
              <Badge variant="secondary">{teacher.subject}</Badge>
            </div>
          )}

          {teacher.experience_years && (
            <p className="text-sm text-gray-600">
              {teacher.experience_years} years of experience
            </p>
          )}

          {teacher.specialization && teacher.specialization.length > 0 && (
            <div className="flex flex-wrap gap-1">
              {teacher.specialization.slice(0, 2).map((spec, index) => (
                <Badge key={index} variant="outline" className="text-xs">
                  {spec}
                </Badge>
              ))}
              {teacher.specialization.length > 2 && (
                <Badge variant="outline" className="text-xs">
                  +{teacher.specialization.length - 2} more
                </Badge>
              )}
            </div>
          )}

          {teacher.achievements && teacher.achievements.length > 0 && (
            <div className="flex items-center gap-1">
              <Award className="h-4 w-4 text-yellow-600" />
              <span className="text-sm text-gray-600">
                {teacher.achievements.length} achievement
                {teacher.achievements.length !== 1 ? "s" : ""}
              </span>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default TeacherCard;
