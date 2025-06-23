import { getTeachersPaginated } from "@/lib/data";

import EmptyTeacherState from "./EmptyTeacherState";
import TeacherCard from "./TeacherCard";
import TeacherPagination from "./TeacherPagination";

type TeacherListProps = {
  searchParams?: {
    page?: string;
    search?: string;
  };
};

const TeacherList = async ({ searchParams }: TeacherListProps) => {
  const page = Number(searchParams?.page) || 1;
  const search = searchParams?.search || "";

  const result = await getTeachersPaginated({
    page,
    limit: 6, // 6 cards per page
    search,
  });

  const { data: teachers, pagination } = result;

  if (!teachers || teachers.length === 0) {
    if (search) {
      return (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <div className="mx-auto max-w-md">
            <h3 className="text-lg font-semibold">Tidak ada hasil ditemukan</h3>{" "}
            <p className="mt-2 text-sm text-gray-600">
              Tidak ditemukan guru yang sesuai dengan pencarian &ldquo;{search}
              &rdquo;. Coba gunakan kata kunci yang berbeda.
            </p>
          </div>
        </div>
      );
    }
    return <EmptyTeacherState />;
  }

  return (
    <div className="space-y-6">
      {search && (
        <div className="text-muted-foreground text-sm">
          Menampilkan hasil pencarian untuk &ldquo;{search}&rdquo; (
          {pagination.total_items} guru ditemukan)
        </div>
      )}

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {teachers.map((teacher) => (
          <TeacherCard key={teacher.id} teacher={teacher} />
        ))}
      </div>

      {pagination.total_pages > 1 && (
        <TeacherPagination pagination={pagination} />
      )}
    </div>
  );
};

export default TeacherList;
