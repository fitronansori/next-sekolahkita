import { Plus, User } from "lucide-react";

import Link from "next/link";

import { Button } from "@/components/ui/button";

const EmptyTeacherState = () => {
  return (
    <div className="py-8 text-center">
      <User className="mx-auto mb-4 h-12 w-12 text-gray-400" />
      <h3 className="mb-2 text-lg font-medium text-gray-900">
        No teachers found
      </h3>
      <p className="mb-4 text-gray-500">Start by adding your first teacher.</p>
      <Link href="/dashboard/teachers/add">
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Teacher
        </Button>
      </Link>
    </div>
  );
};

export default EmptyTeacherState;
