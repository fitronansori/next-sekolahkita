import { Card, CardContent } from "@/components/ui/card";

const SchoolProfile = () => {
  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <Card className="shadow-md">
        <CardContent>
          <h3 className="mb-4 text-xl font-bold">Visi Sekolah</h3>
          <p className="mb-4 text-gray-600">
            Menjadi lembaga pendidikan unggulan yang menghasilkan generasi
            cerdas, berkarakter, dan berdaya saing global.
          </p>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm">
              <span className="h-2 w-2 rounded-full bg-blue-600"></span>
              Pendidikan berkualitas
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="h-2 w-2 rounded-full bg-blue-600"></span>
              Karakter mulia
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="shadow-md">
        <CardContent>
          <h3 className="mb-4 text-xl font-bold">Misi Sekolah</h3>
          <div className="space-y-3 text-sm text-gray-600">
            <p>• Menyelenggarakan pendidikan berkualitas</p>
            <p>• Mengembangkan karakter siswa</p>
            <p>• Menyediakan fasilitas modern</p>
            <p>• Memberdayakan tenaga pendidik profesional</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SchoolProfile;
