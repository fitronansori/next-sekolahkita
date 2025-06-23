"use client";

import {
  Award,
  Edit,
  GraduationCap,
  MoreVertical,
  Trash2,
  User,
} from "lucide-react";
import { toast } from "sonner";

import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { deleteTeacher } from "@/actions/teacher-action";
import { Teacher } from "@/types/teacher";

type TeacherCardProps = {
  teacher: Teacher;
};

const TeacherCard = ({ teacher }: TeacherCardProps) => {
  const handle_delete_teacher = async (teacher_id: string) => {
    try {
      const result = await deleteTeacher(teacher_id);
      if (result.success) {
        toast.success("Guru berhasil dihapus");
      } else {
        toast.error(result.error || "Gagal menghapus guru");
      }
    } catch {
      toast.error("Terjadi kesalahan saat menghapus guru");
    }
  };
  return (
    <Card className="transition-shadow hover:shadow-lg">
      <CardHeader>
        <div className="flex items-center justify-between">
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
                <User className="text-muted-foreground h-6 w-6" />
              </div>
            )}
            <div>
              <CardTitle className="text-lg">{teacher.name}</CardTitle>
              <p className="text-muted-foreground text-sm">{teacher.email}</p>
            </div>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <MoreVertical className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild>
                <Link href={`/dashboard/teachers/edit/${teacher.id}`}>
                  <Edit className="size-4" />
                  Edit Guru
                </Link>
              </DropdownMenuItem>

              <DropdownMenuItem
                onClick={() => handle_delete_teacher(teacher.id)}
                className="text-destructive"
              >
                <Trash2 className="text-destructive size-4" />
                Hapus Guru
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>

      <CardContent>
        <div className="space-y-3">
          {teacher.position && (
            <div className="flex items-center gap-2">
              <GraduationCap className="text-primary h-4 w-4" />
              <span className="text-sm font-medium">{teacher.position}</span>
            </div>
          )}

          {teacher.subject && (
            <div>
              <Badge variant="secondary">{teacher.subject}</Badge>
            </div>
          )}

          {teacher.experience_years && (
            <p className="text-muted-foreground text-sm">
              {teacher.experience_years} tahun pengalaman
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
                  +{teacher.specialization.length - 2} lainnya
                </Badge>
              )}
            </div>
          )}

          {teacher.achievements && teacher.achievements.length > 0 && (
            <div className="flex items-center gap-1">
              <Award className="h-4 w-4 text-yellow-600" />
              <span className="text-muted-foreground text-sm">
                {teacher.achievements.length} prestasi
              </span>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default TeacherCard;
