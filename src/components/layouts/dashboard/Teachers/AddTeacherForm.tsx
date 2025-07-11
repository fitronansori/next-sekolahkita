"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { X } from "lucide-react";
import { toast } from "sonner";

import Image from "next/image";
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

import { createTeacher } from "@/actions/teacher-action";
import { TeacherFormData, teacher_form_schema } from "@/constants/form-schemas";

const AddTeacherForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [newSpecialization, setNewSpecialization] = useState("");
  const [newAchievement, setNewAchievement] = useState("");

  const form = useForm<TeacherFormData>({
    resolver: zodResolver(teacher_form_schema),
    defaultValues: {
      name: "",
      email: "",
      position: "",
      subject: "",
      experience_years: undefined,
      education: "",
      specialization: [],
      image_url: "",
      bio: "",
      achievements: [],
    },
  });
  const addSpecialization = () => {
    if (newSpecialization.trim()) {
      const currentSpecializations = form.getValues("specialization");
      const trimmedSpec = newSpecialization.trim();
      // Check for duplicates
      if (!currentSpecializations.includes(trimmedSpec)) {
        form.setValue("specialization", [
          ...currentSpecializations,
          trimmedSpec,
        ]);
        setNewSpecialization("");
      } else {
        toast.error("Spesialisasi yang sama telah ditambahkan sebelumnya.");
      }
    }
  };

  const removeSpecialization = (index: number) => {
    const currentSpecializations = form.getValues("specialization");
    const updated = currentSpecializations.filter((_, i) => i !== index);
    form.setValue("specialization", updated);
  };

  const addAchievement = () => {
    if (newAchievement.trim()) {
      const currentAchievements = form.getValues("achievements");
      const trimmedAchievement = newAchievement.trim(); // Check for duplicates
      if (!currentAchievements.includes(trimmedAchievement)) {
        form.setValue("achievements", [
          ...currentAchievements,
          trimmedAchievement,
        ]);
        setNewAchievement("");
      } else {
        toast.error("Prestasi yang sama telah ditambahkan sebelumnya.");
      }
    }
  };

  const removeAchievement = (index: number) => {
    const currentAchievements = form.getValues("achievements");
    const updated = currentAchievements.filter((_, i) => i !== index);
    form.setValue("achievements", updated);
  };

  async function onSubmit(data: TeacherFormData) {
    setIsSubmitting(true);
    try {
      const result = await createTeacher({
        ...data,
        experience_years: data.experience_years || undefined,
        image_url: data.image_url || undefined,
        position: data.position || undefined,
        subject: data.subject || undefined,
        education: data.education || undefined,
        bio: data.bio || undefined,
      });
      if (result.success) {
        form.reset();
        toast.success("Data guru berhasil disimpan ke dalam sistem.");
      } else {
        toast.error(`Gagal menyimpan data guru: ${result.error}`);
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
                      min="0"
                      max="50"
                      {...field}
                      onChange={(e) => {
                        const value = e.target.value;
                        field.onChange(
                          value === "" ? undefined : parseInt(value, 10)
                        );
                      }}
                      value={field.value || ""}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          {/* Professional Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Informasi Profesional</h3>
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
                            size={"icon"}
                            onClick={() => field.onChange("")}
                            variant={"destructive"}
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
                          }
                        }}
                        onUploadError={(error: Error) => {
                          console.error("Upload error:", error);
                          toast.error(`Upload error: ${error.message}`);
                        }}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
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
          {/* Specializations */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Bidang Spesialisasi</h3>
            <div className="flex gap-2">
              <Input
                placeholder="Tambahkan bidang spesialisasi"
                value={newSpecialization}
                onChange={(e) => setNewSpecialization(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    addSpecialization();
                  }
                }}
              />
              <Button
                type="button"
                onClick={addSpecialization}
                variant="outline"
              >
                Tambahkan
              </Button>
            </div>
            <div className="flex flex-wrap gap-2">
              {form.watch("specialization").map((spec, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="flex items-center gap-1 px-3 py-1"
                >
                  <span>{spec}</span>
                  <button
                    type="button"
                    onClick={() => removeSpecialization(index)}
                    className="text-muted-foreground hover:text-foreground ml-1"
                  >
                    <X size={14} />
                  </button>
                </Badge>
              ))}
            </div>
          </div>
          {/* Achievements */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Prestasi dan Penghargaan</h3>
            <div className="flex gap-2">
              <Input
                placeholder="Tambahkan prestasi atau penghargaan"
                value={newAchievement}
                onChange={(e) => setNewAchievement(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    addAchievement();
                  }
                }}
              />
              <Button type="button" onClick={addAchievement} variant="outline">
                Tambahkan
              </Button>
            </div>
            <div className="flex flex-wrap gap-2">
              {form.watch("achievements").map((achievement, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="flex items-center gap-2 border-green-200 bg-green-50 px-3 py-1 text-green-800"
                >
                  <span>{achievement}</span>
                  <button
                    type="button"
                    onClick={() => removeAchievement(index)}
                    className="ml-1 text-green-600 hover:text-green-800"
                  >
                    <X size={14} />
                  </button>
                </Badge>
              ))}
            </div>
          </div>
          <div className="flex gap-4 pt-4">
            <Button type="submit" disabled={isSubmitting} className="flex-1">
              {isSubmitting ? "Sedang Memproses..." : "Simpan Data Guru"}
            </Button>

            <Button
              type="button"
              variant="outline"
              onClick={() => form.reset()}
            >
              Bersihkan Form
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default AddTeacherForm;
