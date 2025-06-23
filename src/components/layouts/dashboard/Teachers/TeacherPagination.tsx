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

interface PaginationInfo {
  current_page: number;
  total_pages: number;
  total_items: number;
  items_per_page: number;
  has_next: boolean;
  has_prev: boolean;
}

type TeacherPaginationProps = {
  pagination: PaginationInfo;
};

const TeacherPagination = ({ pagination }: TeacherPaginationProps) => {
  const searchParams = useSearchParams();

  const createPageURL = (pageNumber: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    return `?${params.toString()}`;
  };

  const generatePageNumbers = () => {
    const { current_page, total_pages } = pagination;
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

  const pageNumbers = generatePageNumbers();

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <div className="text-muted-foreground text-sm">
        Menampilkan{" "}
        {(pagination.current_page - 1) * pagination.items_per_page + 1} -{" "}
        {Math.min(
          pagination.current_page * pagination.items_per_page,
          pagination.total_items
        )}{" "}
        dari {pagination.total_items} guru
      </div>

      <Pagination>
        <PaginationContent>
          {pagination.has_prev && (
            <PaginationItem>
              <PaginationPrevious
                href={createPageURL(pagination.current_page - 1)}
              />
            </PaginationItem>
          )}

          {pageNumbers.map((page, index) => {
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
                  href={createPageURL(page as number)}
                  isActive={page === pagination.current_page}
                >
                  {page}
                </PaginationLink>
              </PaginationItem>
            );
          })}

          {pagination.has_next && (
            <PaginationItem>
              <PaginationNext
                href={createPageURL(pagination.current_page + 1)}
              />
            </PaginationItem>
          )}
        </PaginationContent>
      </Pagination>
    </div>
  );
};
export default TeacherPagination;
