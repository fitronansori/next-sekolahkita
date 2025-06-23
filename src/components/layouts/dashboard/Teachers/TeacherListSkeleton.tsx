import { Card, CardContent, CardHeader } from "@/components/ui/card";

const TeacherListSkeleton = () => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 6 }).map((_, index) => (
        <Card key={index} className="animate-pulse">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-gray-200" />

              <div>
                <div className="mb-2 h-4 w-24 rounded bg-gray-200" />

                <div className="h-3 w-32 rounded bg-gray-200" />
              </div>
            </div>
          </CardHeader>

          <CardContent>
            <div className="space-y-3">
              <div className="h-3 w-20 rounded bg-gray-200" />

              <div className="h-6 w-16 rounded bg-gray-200" />

              <div className="h-3 w-28 rounded bg-gray-200" />

              <div className="flex gap-1">
                <div className="h-5 w-12 rounded bg-gray-200" />

                <div className="h-5 w-16 rounded bg-gray-200" />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
export default TeacherListSkeleton;
