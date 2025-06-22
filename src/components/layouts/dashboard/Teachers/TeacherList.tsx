import { getTeachers } from "@/lib/data";

import EmptyTeacherState from "./EmptyTeacherState";
import TeacherCard from "./TeacherCard";

// Teacher List Component that uses async data fetching
const TeacherList = async () => {
  const teachers = await getTeachers();
  if (!teachers || teachers.length === 0) {
    return <EmptyTeacherState />;
  }
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {teachers.map((teacher) => (
        <TeacherCard key={teacher.id} teacher={teacher} />
      ))}
    </div>
  );
};

export default TeacherList;
