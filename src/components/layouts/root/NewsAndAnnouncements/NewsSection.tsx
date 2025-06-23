import { ChevronRight } from "lucide-react";

import Link from "next/link";
import { useMemo } from "react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

import { latest_news } from "@/constants/data";

import NewsCard, { type NewsItem } from "./NewsCard";

type NewsSectionProps = {
  featured_count?: number;
  other_news_count?: number;
  className?: string;
};

const NewsSection = ({
  featured_count = 1,
  other_news_count = 3,
  className,
}: NewsSectionProps = {}) => {
  const { featured_news, regular_news } = useMemo(() => {
    const featured = latest_news
      .filter((news: NewsItem) => news.is_featured)
      .slice(0, featured_count);

    const regular = latest_news
      .filter((news: NewsItem) => !news.is_featured)
      .slice(0, other_news_count);

    return {
      featured_news: featured,
      regular_news: regular,
    };
  }, [featured_count, other_news_count]);

  if (!latest_news || latest_news.length === 0) {
    return (
      <div className={cn("py-8 text-center", className)}>
        <p className="text-gray-500">Tidak ada berita tersedia saat ini.</p>
      </div>
    );
  }

  return (
    <section
      className={cn("grid gap-6 lg:grid-cols-3", className)}
      aria-label="Berita Terbaru"
    >
      {/* Featured News */}
      {featured_news.length > 0 && (
        <div className="lg:col-span-2">
          {featured_news.map((news: NewsItem, index: number) => (
            <NewsCard
              key={news.id}
              news={news}
              variant="featured"
              priority={index === 0}
            />
          ))}
        </div>
      )}

      {/* Other News */}
      <div className="space-y-4">
        <div className="space-y-4">
          {regular_news.map((news: NewsItem) => (
            <NewsCard key={news.id} news={news} variant="small" />
          ))}
        </div>

        {regular_news.length > 0 && (
          <div className="pt-2">
            <Button className="w-full" asChild>
              <Link href={"/"}>
                Lihat Semua Berita
                <ChevronRight />
              </Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default NewsSection;
