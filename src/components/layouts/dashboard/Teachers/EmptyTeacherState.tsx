import { Plus, User } from "lucide-react";

import Link from "next/link";

import { Button } from "@/components/ui/button";

const EmptyTeacherState = () => {
  return (
    <div className="space-y-4 py-8 text-center">
      <User className="text-muted-foreground mx-auto size-12" />
      <h3 className="mb-2 text-lg font-medium">Tidak ada guru ditemukan</h3>

      <p className="text-muted-foreground">
        Mulai dengan menambahkan guru pertama Anda.
      </p>

      <Button asChild>
        <Link href="/dashboard/teachers/add">
          <Plus className="mr-2 h-4 w-4" />
          Tambah Guru
        </Link>
      </Button>
    </div>
  );
};

export default EmptyTeacherState;
