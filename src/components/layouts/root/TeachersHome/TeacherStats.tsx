import { Award, BookOpen, GraduationCap, Users } from "lucide-react";

import { getTeachers } from "@/lib/data";

import { Card, CardContent } from "@/components/ui/card";

const TeacherStats = async () => {
  const teachers = await getTeachers();

  const total_teachers = teachers.length;
  const total_experience = teachers.reduce(
    (sum, teacher) => sum + (teacher.experience_years || 0),
    0
  );
  const avg_experience =
    total_teachers > 0 ? total_experience / total_teachers : 0;
  const total_subjects = new Set(
    teachers.map((teacher) => teacher.subject).filter(Boolean)
  ).size;
  const total_achievements = teachers.reduce(
    (sum, teacher) => sum + (teacher.achievements?.length || 0),
    0
  );

  const stats = [
    {
      icon: Users,
      label: "Total Guru",
      value: total_teachers.toString(),
      color: "text-blue-600",
      bg_color: "bg-blue-50",
    },
    {
      icon: GraduationCap,
      label: "Rata-rata Pengalaman",
      value: `${Math.round(avg_experience)} tahun`,
      color: "text-green-600",
      bg_color: "bg-green-50",
    },
    {
      icon: BookOpen,
      label: "Mata Pelajaran",
      value: total_subjects.toString(),
      color: "text-purple-600",
      bg_color: "bg-purple-50",
    },
    {
      icon: Award,
      label: "Total Prestasi",
      value: total_achievements.toString(),
      color: "text-yellow-600",
      bg_color: "bg-yellow-50",
    },
  ];

  return (
    <div className="mb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => {
        const IconComponent = stat.icon;

        return (
          <Card key={index} className="border-0 shadow-sm">
            <CardContent className="flex items-center gap-4 p-6">
              <div className={`rounded-full p-3 ${stat.bg_color}`}>
                <IconComponent className={`h-6 w-6 ${stat.color}`} />
              </div>

              <div>
                <p className="text-muted-foreground text-sm font-medium">
                  {stat.label}
                </p>

                <p className="text-2xl font-bold">{stat.value}</p>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default TeacherStats;
