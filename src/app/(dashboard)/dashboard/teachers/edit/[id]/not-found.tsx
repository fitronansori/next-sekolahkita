import Link from "next/link";

import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div className="flex min-h-[400px] flex-col items-center justify-center space-y-4">
      <h1 className="text-4xl font-bold">404</h1>

      <h2 className="text-xl font-semibold">Guru Tidak Ditemukan</h2>

      <p className="text-muted-foreground text-center">
        Guru yang Anda cari tidak ada atau telah dihapus.
      </p>

      <Button asChild>
        <Link href="/dashboard/teachers">Kembali ke Daftar Guru</Link>
      </Button>
    </div>
  );
};

export default NotFound;
