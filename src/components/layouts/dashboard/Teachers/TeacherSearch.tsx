"use client";

import { Search, X } from "lucide-react";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const TeacherSearch = () => {
  const router = useRouter();
  const search_params = useSearchParams();
  const [search_value, set_search_value] = useState(
    search_params.get("search") || ""
  );

  const create_search_url = useCallback(
    (search: string) => {
      const params = new URLSearchParams(search_params);
      if (search) {
        params.set("search", search);
        params.set("page", "1"); // Reset to first page when searching
      } else {
        params.delete("search");
        params.delete("page");
      }
      return `?${params.toString()}`;
    },
    [search_params]
  );

  const handle_search = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(create_search_url(search_value));
  };

  const handle_clear = () => {
    set_search_value("");
    router.push(create_search_url(""));
  };

  return (
    <form onSubmit={handle_search} className="flex gap-2">
      <div className="relative flex-1">
        <Search className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transform" />
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
            onClick={handle_clear}
            className="absolute top-1/2 right-1 h-8 w-8 -translate-y-1/2 transform p-0"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Clear search</span>
          </Button>
        )}
      </div>

      <Button type="submit" variant="outline">
        Cari
      </Button>
    </form>
  );
};

export default TeacherSearch;
