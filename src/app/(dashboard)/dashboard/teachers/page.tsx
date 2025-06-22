import { Plus } from "lucide-react";

import Link from "next/link";
import { Suspense } from "react";

import {
  TeacherList,
  TeacherListSkeleton,
} from "@/components/layouts/dashboard/Teachers";
import { Button } from "@/components/ui/button";

// Main Page Component
const TeacherPage = () => {
  return (
    <div className="space-y-6 p-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Teachers</h1>
          <p className="mt-1 text-gray-600">
            Manage your school&apos;s teaching staff
          </p>
        </div>
        <Button asChild>
          <Link href="/dashboard/teachers/add">
            <Plus />
            Add Teacher
          </Link>
        </Button>
      </div>

      {/* Teacher List with Suspense for Streaming */}
      <Suspense fallback={<TeacherListSkeleton />}>
        <TeacherList />
      </Suspense>
    </div>
  );
};

export default TeacherPage;
