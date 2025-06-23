import { Plus } from "lucide-react";

import { Suspense } from "react";

import DashboardTitle from "@/components/common/DashboardTitle";
import {
  TeacherList,
  TeacherListSkeleton,
  TeacherSearch,
} from "@/components/layouts/dashboard/Teachers";

type TeacherPageProps = {
  searchParams?: Promise<{
    page?: string;
    search?: string;
  }>;
};

const TeacherPage = async ({ searchParams }: TeacherPageProps) => {
  const resolvedSearchParams = searchParams ? await searchParams : undefined;
  return (
    <div className="space-y-6 p-4">
      <DashboardTitle
        title="Guru"
        description="Kelola staf pengajar sekolah Anda"
        action={{
          label: "Tambah Guru",
          href: "/dashboard/teachers/add",
          icon: <Plus className="size-4" />,
        }}
      />

      <div className="space-y-4">
        <TeacherSearch />{" "}
        <Suspense fallback={<TeacherListSkeleton />}>
          <TeacherList searchParams={resolvedSearchParams} />
        </Suspense>
      </div>
    </div>
  );
};

export default TeacherPage;
