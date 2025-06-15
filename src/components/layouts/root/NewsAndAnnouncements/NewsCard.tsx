import { Calendar, ChevronRight, User } from "lucide-react";

import Image from "next/image";
import Link from "next/link";
import { memo } from "react";

import { cn, formatDate } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";

export interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  author: string;
  image_url: string;
  slug: string;
  is_featured: boolean;
}

interface NewsCardProps {
  news: NewsItem;
  variant?: "featured" | "small";
  priority?: boolean;
}

const NewsCard = memo(
  ({ news, variant = "small", priority = false }: NewsCardProps) => {
    const card_classes =
      "overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-[1.02]";

    if (variant === "featured") {
      return (
        <Card className={cn("gap-4 py-0 lg:col-span-2", card_classes)}>
          <div className="md:flex">
            <div className="relative h-64 md:h-auto md:w-1/2">
              <Image
                src={news.image_url}
                alt={`${news.title} - ${news.category}`}
                fill
                className="object-cover"
                priority={priority}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute top-4 left-4">
                <span className="rounded-full bg-blue-600 px-3 py-1 text-sm font-medium text-white shadow-md">
                  {news.category}
                </span>
              </div>
            </div>

            <CardContent className="flex flex-col justify-between p-6 md:w-1/2">
              <div>
                <CardTitle className="mb-3 line-clamp-2 text-xl leading-tight">
                  {news.title}
                </CardTitle>
                <p className="mb-4 line-clamp-3 leading-relaxed text-gray-600">
                  {news.excerpt}
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex flex-col gap-2 text-sm text-gray-500 sm:flex-row sm:items-center sm:gap-4">
                  <div className="flex items-center gap-1">
                    <Calendar size={16} aria-hidden="true" />
                    <time dateTime={news.date}>{formatDate(news.date)}</time>
                  </div>
                  <div className="flex items-center gap-1">
                    <User size={16} aria-hidden="true" />
                    <span>{news.author}</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full sm:w-auto" asChild>
                  <Link href={`/berita/${news.slug}`} className="inline-block">
                    Baca Selengkapnya
                    <ChevronRight />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </div>
        </Card>
      );
    }

    return (
      <Link href={`/berita/${news.slug}`} className="block">
        <Card className={cn("cursor-pointer py-0", card_classes)}>
          <CardContent className="p-4">
            <div className="flex gap-4">
              <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg">
                <Image
                  src={news.image_url}
                  alt={news.title}
                  fill
                  className="object-cover"
                  sizes="80px"
                />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="mb-2 line-clamp-2 text-sm leading-tight font-semibold">
                  {news.title}
                </h3>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <Calendar size={12} aria-hidden="true" />
                  <time dateTime={news.date}>{formatDate(news.date)}</time>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </Link>
    );
  }
);

NewsCard.displayName = "NewsCard";

export default NewsCard;
