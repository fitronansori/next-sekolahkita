"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { X } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";

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

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Nama harus minimal 2 karakter.",
  }),
  email: z.string().email({
    message: "Silakan masukkan alamat email yang valid.",
  }),
  position: z.string().optional(),
  subject: z.string().optional(),
  experience_years: z.number().min(0).optional(),
  education: z.string().optional(),
  specialization: z.array(z.string()),
  image_url: z
    .string()
    .optional()
    .refine((val) => !val || z.string().url().safeParse(val).success, {
      message: "Silakan masukkan URL yang valid atau kosongkan",
    }),
  bio: z.string().optional(),
  achievements: z.array(z.string()),
});

type FormData = z.infer<typeof formSchema>;

const AddTeacherForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [newSpecialization, setNewSpecialization] = useState("");
  const [newAchievement, setNewAchievement] = useState("");

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
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
        toast.error("Spesialisasi ini sudah ada!");
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
        toast.error("Prestasi ini sudah ada!");
      }
    }
  };

  const removeAchievement = (index: number) => {
    const currentAchievements = form.getValues("achievements");
    const updated = currentAchievements.filter((_, i) => i !== index);
    form.setValue("achievements", updated);
  };
  async function onSubmit(values: FormData) {
    setIsSubmitting(true);
    try {
      const result = await createTeacher({
        ...values,
        experience_years: values.experience_years || undefined,
        image_url: values.image_url || undefined,
        position: values.position || undefined,
        subject: values.subject || undefined,
        education: values.education || undefined,
        bio: values.bio || undefined,
      });
      if (result.success) {
        form.reset();
        toast.success("Guru berhasil dibuat!");
      } else {
        toast.error(`Gagal membuat guru: ${result.error}`);
      }
    } catch (error) {
      console.error("Unexpected error:", error);
      toast.error("Terjadi kesalahan yang tidak terduga. Silakan coba lagi.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="mx-auto max-w-2xl p-6">
      <h2 className="mb-6 text-2xl font-bold">Tambah Guru Baru</h2>
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
                      placeholder="Masukkan nama lengkap guru"
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
                      placeholder="guru@sekolah.com"
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
                      placeholder="contoh: Kepala Sekolah, Guru Senior"
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
                      placeholder="contoh: Matematika, Bahasa Indonesia, IPA"
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
                  <FormLabel>Tahun Pengalaman</FormLabel>
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
                  <FormLabel>Pendidikan</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="contoh: S1 Matematika, S2 Pendidikan"
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
                  <FormLabel>Biografi</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Ceritakan tentang latar belakang guru, filosofi mengajar, dan minat..."
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
            <h3 className="text-lg font-semibold">Spesialisasi</h3>
            <div className="flex gap-2">
              <Input
                placeholder="Tambah spesialisasi"
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
                Tambah
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
            <h3 className="text-lg font-semibold">Prestasi</h3>
            <div className="flex gap-2">
              <Input
                placeholder="Tambah prestasi"
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
                Tambah
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
              {isSubmitting ? "Membuat..." : "Buat Guru"}
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => form.reset()}
            >
              Reset Form
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default AddTeacherForm;
