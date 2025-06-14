const FeatureStats = () => {
  return (
    <div className="rounded-xl border bg-white p-8 shadow-sm lg:p-12">
      <div className="mb-8 text-center">
        <h3 className="mb-2 text-2xl font-bold">Fakta & Angka</h3>

        <p className="text-muted-foreground">
          Data pencapaian kami yang membanggakan
        </p>
      </div>

      <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
        <div className="text-center">
          <div className="text-primary mb-2 text-3xl font-bold lg:text-4xl">
            15+
          </div>

          <div className="text-muted-foreground text-sm">
            Tahun Berpengalaman
          </div>
        </div>
        <div className="text-center">
          <div className="text-primary mb-2 text-3xl font-bold lg:text-4xl">
            1200+
          </div>

          <div className="text-muted-foreground text-sm">Siswa Aktif</div>
        </div>
        <div className="text-center">
          <div className="text-primary mb-2 text-3xl font-bold lg:text-4xl">
            85+
          </div>

          <div className="text-muted-foreground text-sm">Tenaga Pendidik</div>
        </div>
        <div className="text-center">
          <div className="text-primary mb-2 text-3xl font-bold lg:text-4xl">
            95%
          </div>

          <div className="text-muted-foreground text-sm">Tingkat Kelulusan</div>
        </div>
      </div>
    </div>
  );
};
export default FeatureStats;
