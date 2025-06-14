import {
  BookOpenIcon,
  BuildingIcon,
  TrophyIcon,
  UsersIcon,
} from 'lucide-react';

export const program_akademik: {
  title: string;
  href: string;
  description: string;
}[] = [
  {
    title: 'Kurikulum',
    href: '/akademik/kurikulum',
    description:
      'Informasi lengkap tentang kurikulum dan struktur pembelajaran.',
  },
  {
    title: 'Jadwal Pelajaran',
    href: '/akademik/jadwal',
    description: 'Jadwal mata pelajaran untuk semua tingkat kelas.',
  },
  {
    title: 'Kalender Akademik',
    href: '/akademik/kalender',
    description: 'Kalender kegiatan akademik sepanjang tahun ajaran.',
  },
  {
    title: 'Prestasi Siswa',
    href: '/akademik/prestasi',
    description: 'Pencapaian dan prestasi yang diraih oleh siswa-siswi.',
  },
];

export const info_sekolah: {
  title: string;
  href: string;
  description: string;
}[] = [
  {
    title: 'Profil Sekolah',
    href: '/profil',
    description: 'Sejarah, visi, misi, dan profil lengkap sekolah.',
  },
  {
    title: 'Fasilitas',
    href: '/fasilitas',
    description:
      'Fasilitas lengkap yang tersedia untuk mendukung pembelajaran.',
  },
  {
    title: 'Tenaga Pendidik',
    href: '/guru',
    description: 'Profil guru dan tenaga kependidikan yang berpengalaman.',
  },
  {
    title: 'Ekstrakurikuler',
    href: '/ekstrakurikuler',
    description: 'Berbagai kegiatan ekstrakurikuler untuk pengembangan bakat.',
  },
];

export const kegiatan_items = [
  {
    title: 'Berita Sekolah',
    href: '/berita',
    description: 'Berita terkini dan kegiatan sekolah.',
    icon: 'BookOpenIcon',
  },
  {
    title: 'Galeri Kegiatan',
    href: '/galeri',
    description: 'Dokumentasi kegiatan dan acara sekolah.',
    icon: 'CalendarIcon',
  },
  {
    title: 'Pengumuman',
    href: '/pengumuman',
    description: 'Pengumuman penting untuk siswa dan orang tua.',
    icon: 'UsersIcon',
  },
];

export const tentang_sekolah_items = [
  {
    title: 'Profil Sekolah',
    href: '/profil',
    description: 'Sejarah, visi, misi, dan nilai-nilai sekolah.',
  },
  {
    title: 'Visi & Misi',
    href: '/visi-misi',
    description: 'Arah dan tujuan pendidikan yang ingin dicapai.',
  },
  {
    title: 'Struktur Organisasi',
    href: '/struktur-organisasi',
    description: 'Struktur kepemimpinan dan organisasi sekolah.',
  },
];

// Hero carousel slides data
export const hero_slides = [
  {
    id: 1,
    title: 'Selamat Datang di Sekolah Kita',
    subtitle: 'Membangun Generasi Unggul dan Berkarakter',
    description:
      'Bergabunglah dengan kami dalam menciptakan masa depan yang cerah melalui pendidikan berkualitas tinggi.',
    image_url: '/images/slide1.jpg',
    cta_text: 'Pelajari Lebih Lanjut',
    cta_link: '/profil',
  },
  {
    id: 2,
    title: 'Fasilitas Modern & Lengkap',
    subtitle: 'Lingkungan Belajar yang Mendukung',
    description:
      'Nikmati fasilitas pembelajaran modern dengan teknologi terdepan untuk mengoptimalkan potensi siswa.',
    image_url: '/images/slide2.jpg',
    cta_text: 'Lihat Fasilitas',
    cta_link: '/fasilitas',
  },
  {
    id: 3,
    title: 'Prestasi & Pencapaian',
    subtitle: 'Kebanggaan Sekolah Kita',
    description:
      'Berbagai prestasi akademik dan non-akademik yang membanggakan dari siswa-siswi berprestasi.',
    image_url: '/images/slide3.jpg',
    cta_text: 'Lihat Prestasi',
    cta_link: '/akademik/prestasi',
  },
];

// Features data using underscore field_names as per instructions
export const features_data = [
  {
    id: 1,
    title: 'Program Akademik Unggulan',
    description:
      'Kurikulum terdepan yang mengintegrasikan pendidikan karakter dengan kemajuan teknologi modern untuk mempersiapkan siswa menghadapi tantangan masa depan.',
    icon: BookOpenIcon,
    cta_text: 'Lihat Program',
    cta_link: '/akademik/kurikulum',
    highlights: [
      'Kurikulum Merdeka',
      'Pembelajaran Digital',
      'Kelas Internasional',
      'Program Akselerasi',
    ],
  },
  {
    id: 2,
    title: 'Fasilitas Modern & Lengkap',
    description:
      'Lingkungan belajar yang nyaman dengan fasilitas berstandar internasional untuk mendukung proses pembelajaran yang optimal dan menyenangkan.',
    icon: BuildingIcon,
    cta_text: 'Jelajahi Fasilitas',
    cta_link: '/fasilitas',
    highlights: [
      'Lab Komputer',
      'Perpustakaan Digital',
      'Ruang Multimedia',
      'Arena Olahraga',
    ],
  },
  {
    id: 3,
    title: 'Tenaga Pendidik Berkualitas',
    description:
      'Tim guru profesional dan berpengalaman yang berkomitmen penuh dalam mengembangkan potensi akademik dan karakter setiap siswa.',
    icon: UsersIcon,
    cta_text: 'Profil Guru',
    cta_link: '/guru',
    highlights: [
      'S1 & S2 Bersertifikat',
      'Pengalaman >10 Tahun',
      'Pelatihan Berkala',
      'Metode Inovatif',
    ],
  },
  {
    id: 4,
    title: 'Prestasi & Pencapaian',
    description:
      'Track record gemilang dalam berbagai kompetisi akademik dan non-akademik di tingkat regional, nasional, bahkan internasional.',
    icon: TrophyIcon,
    cta_text: 'Lihat Prestasi',
    cta_link: '/akademik/prestasi',
    highlights: [
      'Juara OSN',
      'Lomba Sains',
      'Kompetisi Internasional',
      'Beasiswa Prestasi',
    ],
  },
];
