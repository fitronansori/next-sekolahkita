import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const TeacherLoadingSkeleton = () => {
  return (
    <div className="mt-12">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <Card key={index} className="overflow-hidden">
            <CardContent className="p-0">
              <div className="p-6 pb-4">
                <div className="text-center">
                  <Skeleton className="mx-auto mb-4 h-24 w-24 rounded-full" />
                  <Skeleton className="mx-auto mb-2 h-6 w-32" />
                  <Skeleton className="mx-auto mb-2 h-4 w-24" />
                  <Skeleton className="mx-auto h-6 w-20" />
                </div>
              </div>
              <div className="space-y-4 p-6">
                <Skeleton className="h-16 w-full" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-3/4" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TeacherLoadingSkeleton;
