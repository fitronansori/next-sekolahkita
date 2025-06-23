import { AlertCircle, Calendar, Clock } from "lucide-react";

import { cn, formatDate } from "@/lib/utils";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface AnnouncementItem {
  id: number;
  title: string;
  content: string;
  category: string;
  priority: string;
  date: string;
  valid_until: string;
  is_urgent: boolean;
}

type AnnouncementCardProps = {
  announcement: AnnouncementItem;
  variant?: "full" | "summary";
};

const AnnouncementCard = ({
  announcement,
  variant = "full",
}: AnnouncementCardProps) => {
  if (variant === "summary") {
    return (
      <div className="border-b border-gray-100 pb-3 last:border-0">
        <h4 className="mb-1 line-clamp-2 text-sm font-medium">
          {announcement.title}
        </h4>
        <div className="flex items-center justify-between text-xs text-gray-500">
          <span>{announcement.category}</span>
          <span>{formatDate(announcement.date)}</span>
        </div>
      </div>
    );
  }

  if (announcement.is_urgent) {
    return (
      <Card className="gap-4 border-l-4 border-l-red-500 bg-red-50">
        <CardHeader>
          <div className="flex items-start justify-between">
            <CardTitle className="flex items-center gap-2 text-lg">
              <AlertCircle className="text-red-500" size={20} />
              {announcement.title}
            </CardTitle>

            <span className="rounded bg-red-100 px-2 py-1 text-xs font-medium text-red-800">
              URGENT
            </span>
          </div>
        </CardHeader>

        <CardContent className="space-y-4">
          <p className="text-gray-700">{announcement.content}</p>

          <div className="flex flex-col gap-2 text-sm text-gray-500 sm:flex-row sm:items-center sm:gap-4">
            <div className="flex items-center gap-1">
              <Calendar size={14} />
              <span>{formatDate(announcement.date)}</span>
            </div>

            <div className="flex items-center gap-1">
              <Clock size={14} />
              <span>Berlaku hingga {formatDate(announcement.valid_until)}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="gap-4 transition-shadow hover:shadow-lg">
      <CardHeader>
        <div className="flex items-start justify-between">
          <CardTitle className="text-lg">{announcement.title}</CardTitle>
          <span
            className={cn(
              "rounded px-2 py-1 text-xs font-medium",
              announcement.priority === "high"
                ? "bg-orange-100 text-orange-800"
                : "bg-blue-100 text-blue-800"
            )}
          >
            {announcement.category}
          </span>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <p className="text-gray-700">{announcement.content}</p>
        <div className="flex flex-col gap-2 text-sm text-gray-500 sm:flex-row sm:items-center sm:gap-4">
          <div className="flex items-center gap-1">
            <Calendar size={14} />
            <span>{formatDate(announcement.date)}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock size={14} />
            <span>Berlaku hingga {formatDate(announcement.valid_until)}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AnnouncementCard;
