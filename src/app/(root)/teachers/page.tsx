import { Suspense } from "react";

import { getTeachersPaginated } from "@/lib/data";

import SectionHeader from "@/components/common/SectionHeader";
import TeacherCard from "@/components/layouts/root/TeachersAndSchool/TeacherCard";
import TeacherEmptyState from "@/components/layouts/root/TeachersHome/TeacherEmptyState";
import TeacherLoadingSkeleton from "@/components/layouts/root/TeachersHome/TeacherLoadingSkeleton";
import TeacherPagination from "@/components/layouts/root/TeachersHome/TeacherPagination";
import TeacherSearch from "@/components/layouts/root/TeachersHome/TeacherSearch";
import TeacherStats from "@/components/layouts/root/TeachersHome/TeacherStats";

interface SearchParams {
  page?: string;
  search?: string;
}

type TeacherHomePageProps = {
  searchParams: Promise<SearchParams>;
};

const TeacherHomePage = async ({ searchParams }: TeacherHomePageProps) => {
  const resolved_search_params = await searchParams;
  const current_page = Number(resolved_search_params.page) || 1;
  const search_query = resolved_search_params.search || "";

  const teachers_data = await getTeachersPaginated({
    page: current_page,
    limit: 9,
    search: search_query,
  });

  return (
    <section className="py-10 lg:py-14">
      <div className="container space-y-4">
        <SectionHeader
          title="Tim Guru Profesional"
          description="Bertemu dengan para pendidik berpengalaman yang siap membimbing perjalanan belajar siswa"
        />

        <TeacherSearch />

        <TeacherStats />

        <Suspense fallback={<TeacherLoadingSkeleton />}>
          <div className="mt-12">
            {teachers_data.data.length > 0 ? (
              <>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {teachers_data.data.map((teacher) => (
                    <TeacherCard key={teacher.id} teacher={teacher} />
                  ))}
                </div>

                {teachers_data.pagination.total_pages > 1 && (
                  <div className="mt-12">
                    <TeacherPagination
                      current_page={teachers_data.pagination.current_page}
                      total_pages={teachers_data.pagination.total_pages}
                      total_items={teachers_data.pagination.total_items}
                      items_per_page={teachers_data.pagination.items_per_page}
                      has_next={teachers_data.pagination.has_next}
                      has_prev={teachers_data.pagination.has_prev}
                    />
                  </div>
                )}
              </>
            ) : (
              <TeacherEmptyState search_query={search_query} />
            )}
          </div>
        </Suspense>
      </div>
    </section>
  );
};

export default TeacherHomePage;
