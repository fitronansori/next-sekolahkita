import { notFound } from "next/navigation";

import { prisma } from "@/lib/prisma";

import DashboardTitle from "@/components/common/DashboardTitle";
import EditTeacherForm from "@/components/layouts/dashboard/Teachers/EditTeacherForm";

type EditTeacherPageProps = {
  params: Promise<{
    id: string;
  }>;
};

const EditTeacherPage = async ({ params }: EditTeacherPageProps) => {
  const { id } = await params;

  const teacher = await prisma.teacher.findUnique({
    where: {
      id: id,
    },
  });

  if (!teacher) {
    notFound();
  }

  return (
    <div className="space-y-6 p-4">
      <DashboardTitle
        title="Edit Guru"
        description="Ubah informasi guru sesuai kebutuhan"
        action={{
          label: "Kembali ke Daftar Guru",
          href: "/dashboard/teachers",
        }}
      />

      <EditTeacherForm teacher={teacher} />
    </div>
  );
};

export default EditTeacherPage;
