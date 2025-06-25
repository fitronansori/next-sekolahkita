"use client";

import { Search, X } from "lucide-react";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const TeacherSearch = () => {
  const router = useRouter();
  const search_params = useSearchParams();
  const [search_value, set_search_value] = useState(
    search_params.get("search") || ""
  );

  useEffect(() => {
    set_search_value(search_params.get("search") || "");
  }, [search_params]);

  const handle_search = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams(search_params.toString());

    if (search_value.trim()) {
      params.set("search", search_value.trim());
    } else {
      params.delete("search");
    }

    // Reset to first page when searching
    params.delete("page");

    router.push(`/teachers?${params.toString()}`);
  };

  const clear_search = () => {
    const params = new URLSearchParams(search_params.toString());
    params.delete("search");
    params.delete("page");

    set_search_value("");
    router.push(`/teachers?${params.toString()}`);
  };

  return (
    <div className="mb-8 flex justify-center">
      <form onSubmit={handle_search} className="flex w-full max-w-md gap-2">
        <div className="relative flex-1">
          <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-gray-400" />

          <Input
            type="text"
            placeholder="Cari guru berdasarkan nama, email, posisi, atau mata pelajaran..."
            value={search_value}
            onChange={(e) => set_search_value(e.target.value)}
            className="pr-10 pl-10"
          />

          {search_value && (
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={clear_search}
              className="absolute top-1/2 right-1 h-8 w-8 -translate-y-1/2 p-0 hover:bg-gray-100"
            >
              <X className="h-4 w-4" />
            </Button>
          )}
        </div>

        <Button type="submit" className="px-6">
          Cari
        </Button>
      </form>
    </div>
  );
};

export default TeacherSearch;
