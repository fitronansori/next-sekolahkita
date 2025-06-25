"use client";

import { useSearchParams } from "next/navigation";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface TeacherPaginationProps {
  current_page: number;
  total_pages: number;
  total_items: number;
  items_per_page: number;
  has_next: boolean;
  has_prev: boolean;
}

const TeacherPagination = ({
  current_page,
  total_pages,
  total_items,
  items_per_page,
  has_next,
  has_prev,
}: TeacherPaginationProps) => {
  const search_params = useSearchParams();

  const create_page_url = (page_number: number) => {
    const params = new URLSearchParams(search_params);
    params.set("page", page_number.toString());
    return `?${params.toString()}`;
  };

  const generate_page_numbers = () => {
    const pages = [];

    // Always show first page
    if (current_page > 3) {
      pages.push(1);
    }

    // Show ellipsis if there's a gap
    if (current_page > 4) {
      pages.push("ellipsis-start");
    }

    // Show pages around current page
    for (
      let i = Math.max(1, current_page - 2);
      i <= Math.min(total_pages, current_page + 2);
      i++
    ) {
      pages.push(i);
    }

    // Show ellipsis if there's a gap
    if (current_page < total_pages - 3) {
      pages.push("ellipsis-end");
    }

    // Always show last page
    if (current_page < total_pages - 2) {
      pages.push(total_pages);
    }

    return pages;
  };

  const page_numbers = generate_page_numbers();

  if (total_pages <= 1) {
    return null;
  }

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <div className="text-muted-foreground text-sm">
        Menampilkan {(current_page - 1) * items_per_page + 1} -{" "}
        {Math.min(current_page * items_per_page, total_items)} dari{" "}
        {total_items} guru
      </div>

      <Pagination>
        <PaginationContent>
          {has_prev && (
            <PaginationItem>
              <PaginationPrevious href={create_page_url(current_page - 1)} />
            </PaginationItem>
          )}

          {page_numbers.map((page, index) => {
            if (page === "ellipsis-start" || page === "ellipsis-end") {
              return (
                <PaginationItem key={`ellipsis-${index}`}>
                  <PaginationEllipsis />
                </PaginationItem>
              );
            }

            return (
              <PaginationItem key={page}>
                <PaginationLink
                  href={create_page_url(page as number)}
                  isActive={page === current_page}
                >
                  {page}
                </PaginationLink>
              </PaginationItem>
            );
          })}

          {has_next && (
            <PaginationItem>
              <PaginationNext href={create_page_url(current_page + 1)} />
            </PaginationItem>
          )}
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default TeacherPagination;
