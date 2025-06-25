type TeacherEmptyStateProps = {
  search_query?: string;
};

const TeacherEmptyState = ({ search_query }: TeacherEmptyStateProps) => {
  return (
    <div className="py-12 text-center">
      <p className="text-muted-foreground text-lg">
        {search_query
          ? `Tidak ada guru yang ditemukan untuk pencarian "${search_query}"`
          : "Belum ada data guru yang tersedia"}
      </p>
    </div>
  );
};

export default TeacherEmptyState;
