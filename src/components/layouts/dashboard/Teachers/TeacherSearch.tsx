"use client";

import { Search, X } from "lucide-react";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const TeacherSearch = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchValue, setSearchValue] = useState(
    searchParams.get("search") || ""
  );

  const createSearchURL = useCallback(
    (search: string) => {
      const params = new URLSearchParams(searchParams);
      if (search) {
        params.set("search", search);
        params.set("page", "1"); // Reset to first page when searching
      } else {
        params.delete("search");
        params.delete("page");
      }
      return `?${params.toString()}`;
    },
    [searchParams]
  );

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(createSearchURL(searchValue));
  };

  const handleClear = () => {
    setSearchValue("");
    router.push(createSearchURL(""));
  };

  return (
    <form onSubmit={handleSearch} className="flex gap-2">
      <div className="relative flex-1">
        <Search className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transform" />
        <Input
          type="text"
          placeholder="Cari guru berdasarkan nama, email, posisi, atau mata pelajaran..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          className="pr-10 pl-10"
        />

        {searchValue && (
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={handleClear}
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
