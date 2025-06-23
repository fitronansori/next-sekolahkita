"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { X } from "lucide-react";
import { toast } from "sonner";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { UploadButton } from "@/lib/uploadthing";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { updateTeacher } from "@/actions/teacher-action";
import { TeacherFormData, teacher_form_schema } from "@/constants/form-schemas";
import { Teacher } from "@/types/teacher";

type EditTeacherFormProps = {
  teacher: Teacher;
};

const EditTeacherForm = ({ teacher }: EditTeacherFormProps) => {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [new_specialization, setNewSpecialization] = useState("");
  const [new_achievement, setNewAchievement] = useState("");
  const form = useForm<TeacherFormData>({
    resolver: zodResolver(teacher_form_schema),
    defaultValues: {
      name: teacher?.name || "",
      email: teacher?.email || "",
      position: teacher?.position || "",
      subject: teacher?.subject || "",
      experience_years: teacher?.experience_years || undefined,
      education: teacher?.education || "",
      specialization: teacher?.specialization || [],
      image_url: teacher?.image_url || "",
      bio: teacher?.bio || "",
      achievements: teacher?.achievements || [],
    },
  });

  const add_specialization = () => {
    if (new_specialization.trim()) {
      const current_specializations = form.getValues("specialization");
      const trimmed_spec = new_specialization.trim();
      // Check for duplicates
      if (!current_specializations.includes(trimmed_spec)) {
        form.setValue("specialization", [
          ...current_specializations,
          trimmed_spec,
        ]);
        setNewSpecialization("");
      } else {
        toast.error("Spesialisasi yang sama telah ditambahkan sebelumnya.");
      }
    }
  };

  const remove_specialization = (index: number) => {
    const current_specializations = form.getValues("specialization");
    const updated = current_specializations.filter((_, i) => i !== index);
    form.setValue("specialization", updated);
  };

  const add_achievement = () => {
    if (new_achievement.trim()) {
      const current_achievements = form.getValues("achievements");
      const trimmed_achievement = new_achievement.trim();
      // Check for duplicates
      if (!current_achievements.includes(trimmed_achievement)) {
        form.setValue("achievements", [
          ...current_achievements,
          trimmed_achievement,
        ]);
        setNewAchievement("");
      } else {
        toast.error("Prestasi yang sama telah ditambahkan sebelumnya.");
      }
    }
  };

  const remove_achievement = (index: number) => {
    const current_achievements = form.getValues("achievements");
    const updated = current_achievements.filter((_, i) => i !== index);
    form.setValue("achievements", updated);
  };
  async function onSubmit(data: TeacherFormData) {
    setIsSubmitting(true);
    try {
      const result = await updateTeacher({
        id: teacher.id,
        ...data,
        experience_years: data.experience_years || null,
        image_url: data.image_url || null,
        position: data.position || null,
        subject: data.subject || null,
        education: data.education || null,
        bio: data.bio || null,
      });
      if (result.success) {
        toast.success("Data guru berhasil diperbarui dalam sistem.");
        router.push("/dashboard/teachers");
      } else {
        toast.error(`Gagal memperbarui data guru: ${result.error}`);
      }
    } catch (error) {
      console.error("Unexpected error:", error);
      toast.error(
        "Terjadi kesalahan sistem yang tidak terduga. Silakan coba lagi atau hubungi administrator."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="mx-auto max-w-2xl p-4">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          {/* Basic Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Informasi Dasar</h3>

            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nama Lengkap *</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Masukkan nama lengkap tenaga pendidik"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Alamat Email *</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="contoh: nama.guru@sekolahkita.sch.id"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="position"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Jabatan</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Contoh: Kepala Sekolah, Guru Senior, Koordinator Kurikulum"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mata Pelajaran Utama</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Contoh: Matematika, Bahasa Indonesia, Ilmu Pengetahuan Alam"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="experience_years"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Pengalaman Mengajar (Tahun)</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="0"
                      {...field}
                      onChange={(e) => {
                        const value = e.target.value;
                        field.onChange(value ? parseInt(value, 10) : undefined);
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="education"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Latar Belakang Pendidikan</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Contoh: S1 Pendidikan Matematika, S2 Teknologi Pendidikan"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          {/* Profile Image */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Foto Profil</h3>

            <FormField
              control={form.control}
              name="image_url"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Foto Profil</FormLabel>
                  <FormControl>
                    <div className="flex flex-col items-start gap-4">
                      {field.value && (
                        <div className="relative size-32">
                          <Image
                            src={field.value}
                            alt="Preview"
                            sizes="100%"
                            fill
                            className="rounded-lg object-cover"
                          />
                          <Button
                            type="button"
                            size="icon"
                            onClick={() => field.onChange("")}
                            variant="destructive"
                            className="absolute -top-2 -right-2 rounded-full"
                          >
                            <X size={16} />
                          </Button>
                        </div>
                      )}

                      <UploadButton
                        endpoint="imageUploader"
                        onClientUploadComplete={(res) => {
                          if (res && res[0]) {
                            field.onChange(res[0].ufsUrl);
                            toast.success(
                              "Gambar profil berhasil diunggah ke sistem."
                            );
                          }
                        }}
                        onUploadError={(error: Error) => {
                          toast.error(
                            `Gagal mengunggah gambar: ${error.message}`
                          );
                        }}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          {/* Specializations */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Bidang Spesialisasi</h3>
            <div className="flex gap-2">
              <Input
                placeholder="Tambahkan bidang spesialisasi"
                value={new_specialization}
                onChange={(e) => setNewSpecialization(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    add_specialization();
                  }
                }}
              />
              <Button type="button" onClick={add_specialization}>
                Tambahkan
              </Button>
            </div>

            <div className="flex flex-wrap gap-2">
              {form.watch("specialization").map((spec, index) => (
                <Badge key={index} variant="secondary" className="text-sm">
                  {spec}
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="ml-1 h-auto p-0"
                    onClick={() => remove_specialization(index)}
                  >
                    <X className="h-3 w-3" />
                  </Button>
                </Badge>
              ))}
            </div>
          </div>
          {/* Bio */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Profil Profesional</h3>
            <FormField
              control={form.control}
              name="bio"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Profil Profesional</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Deskripsikan latar belakang profesional, filosofi pendidikan, pencapaian karir, dan komitmen terhadap dunia pendidikan..."
                      className="min-h-[100px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          {/* Achievements */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Prestasi dan Penghargaan</h3>
            <div className="flex gap-2">
              <Input
                placeholder="Tambahkan prestasi atau penghargaan"
                value={new_achievement}
                onChange={(e) => setNewAchievement(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    add_achievement();
                  }
                }}
              />
              <Button type="button" onClick={add_achievement}>
                Tambahkan
              </Button>
            </div>

            <div className="flex flex-wrap gap-2">
              {form.watch("achievements").map((achievement, index) => (
                <Badge key={index} variant="outline" className="text-sm">
                  {achievement}
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="ml-1 h-auto p-0"
                    onClick={() => remove_achievement(index)}
                  >
                    <X className="h-3 w-3" />
                  </Button>
                </Badge>
              ))}
            </div>
          </div>
          <div className="flex gap-4 pt-6">
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Sedang Memproses..." : "Simpan Perubahan"}
            </Button>

            <Button
              type="button"
              variant="outline"
              onClick={() => router.push("/dashboard/teachers")}
            >
              Batalkan
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default EditTeacherForm;
