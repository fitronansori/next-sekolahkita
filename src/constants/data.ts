import {
  BarChart3,
  BookOpen,
  BookOpenIcon,
  BuildingIcon,
  Calendar,
  FileText,
  GraduationCap,
  Home,
  MessageSquare,
  NewspaperIcon,
  School,
  TrophyIcon,
  Users,
  UsersIcon,
} from "lucide-react";

export const program_akademik: {
  title: string;
  href: string;
  description: string;
}[] = [
  {
    title: "Kurikulum",
    href: "/akademik/kurikulum",
    description:
      "Informasi lengkap tentang kurikulum dan struktur pembelajaran.",
  },
  {
    title: "Jadwal Pelajaran",
    href: "/akademik/jadwal",
    description: "Jadwal mata pelajaran untuk semua tingkat kelas.",
  },
  {
    title: "Kalender Akademik",
    href: "/akademik/kalender",
    description: "Kalender kegiatan akademik sepanjang tahun ajaran.",
  },
  {
    title: "Prestasi Siswa",
    href: "/akademik/prestasi",
    description: "Pencapaian dan prestasi yang diraih oleh siswa-siswi.",
  },
];

export const info_sekolah: {
  title: string;
  href: string;
  description: string;
}[] = [
  {
    title: "Profil Sekolah",
    href: "/profil",
    description: "Sejarah, visi, misi, dan profil lengkap sekolah.",
  },
  {
    title: "Fasilitas",
    href: "/fasilitas",
    description:
      "Fasilitas lengkap yang tersedia untuk mendukung pembelajaran.",
  },
  {
    title: "Tenaga Pendidik",
    href: "/guru",
    description: "Profil guru dan tenaga kependidikan yang berpengalaman.",
  },
  {
    title: "Ekstrakurikuler",
    href: "/ekstrakurikuler",
    description: "Berbagai kegiatan ekstrakurikuler untuk pengembangan bakat.",
  },
];

export const kegiatan_items = [
  {
    title: "Berita Sekolah",
    href: "/berita",
    description: "Berita terkini dan kegiatan sekolah.",
    icon: "BookOpenIcon",
  },
  {
    title: "Galeri Kegiatan",
    href: "/galeri",
    description: "Dokumentasi kegiatan dan acara sekolah.",
    icon: "CalendarIcon",
  },
  {
    title: "Pengumuman",
    href: "/pengumuman",
    description: "Pengumuman penting untuk siswa dan orang tua.",
    icon: "UsersIcon",
  },
];

export const tentang_sekolah_items = [
  {
    title: "Profil Sekolah",
    href: "/profil",
    description: "Sejarah, visi, misi, dan nilai-nilai sekolah.",
  },
  {
    title: "Visi & Misi",
    href: "/visi-misi",
    description: "Arah dan tujuan pendidikan yang ingin dicapai.",
  },
  {
    title: "Struktur Organisasi",
    href: "/struktur-organisasi",
    description: "Struktur kepemimpinan dan organisasi sekolah.",
  },
];

// Hero carousel slides data
export const hero_slides = [
  {
    id: 1,
    title: "Selamat Datang di Sekolah Kita",
    subtitle: "Membangun Generasi Unggul dan Berkarakter",
    description:
      "Bergabunglah dengan kami dalam menciptakan masa depan yang cerah melalui pendidikan berkualitas tinggi.",
    image_url: "/images/slide1.jpg",
    cta_text: "Pelajari Lebih Lanjut",
    cta_link: "/profil",
  },
  {
    id: 2,
    title: "Fasilitas Modern & Lengkap",
    subtitle: "Lingkungan Belajar yang Mendukung",
    description:
      "Nikmati fasilitas pembelajaran modern dengan teknologi terdepan untuk mengoptimalkan potensi siswa.",
    image_url: "/images/slide2.jpg",
    cta_text: "Lihat Fasilitas",
    cta_link: "/fasilitas",
  },
  {
    id: 3,
    title: "Prestasi & Pencapaian",
    subtitle: "Kebanggaan Sekolah Kita",
    description:
      "Berbagai prestasi akademik dan non-akademik yang membanggakan dari siswa-siswi berprestasi.",
    image_url: "/images/slide3.jpg",
    cta_text: "Lihat Prestasi",
    cta_link: "/akademik/prestasi",
  },
];

// Features data using underscore field_names as per instructions
export const features_data = [
  {
    id: 1,
    title: "Program Akademik Unggulan",
    description:
      "Kurikulum terdepan yang mengintegrasikan pendidikan karakter dengan kemajuan teknologi modern untuk mempersiapkan siswa menghadapi tantangan masa depan.",
    icon: BookOpenIcon,
    cta_text: "Lihat Program",
    cta_link: "/akademik/kurikulum",
    highlights: [
      "Kurikulum Merdeka",
      "Pembelajaran Digital",
      "Kelas Internasional",
      "Program Akselerasi",
    ],
  },
  {
    id: 2,
    title: "Fasilitas Modern & Lengkap",
    description:
      "Lingkungan belajar yang nyaman dengan fasilitas berstandar internasional untuk mendukung proses pembelajaran yang optimal dan menyenangkan.",
    icon: BuildingIcon,
    cta_text: "Jelajahi Fasilitas",
    cta_link: "/fasilitas",
    highlights: [
      "Lab Komputer",
      "Perpustakaan Digital",
      "Ruang Multimedia",
      "Arena Olahraga",
    ],
  },
  {
    id: 3,
    title: "Tenaga Pendidik Berkualitas",
    description:
      "Tim guru profesional dan berpengalaman yang berkomitmen penuh dalam mengembangkan potensi akademik dan karakter setiap siswa.",
    icon: UsersIcon,
    cta_text: "Profil Guru",
    cta_link: "/guru",
    highlights: [
      "S1 & S2 Bersertifikat",
      "Pengalaman >10 Tahun",
      "Pelatihan Berkala",
      "Metode Inovatif",
    ],
  },
  {
    id: 4,
    title: "Prestasi & Pencapaian",
    description:
      "Track record gemilang dalam berbagai kompetisi akademik dan non-akademik di tingkat regional, nasional, bahkan internasional.",
    icon: TrophyIcon,
    cta_text: "Lihat Prestasi",
    cta_link: "/akademik/prestasi",
    highlights: [
      "Juara OSN",
      "Lomba Sains",
      "Kompetisi Internasional",
      "Beasiswa Prestasi",
    ],
  },
];

// News and announcements data using underscore field_names
export const latest_news = [
  {
    id: 1,
    title: "Penerimaan Siswa Baru Tahun Ajaran 2025/2026",
    excerpt:
      "Pendaftaran siswa baru telah dibuka dengan berbagai program unggulan dan fasilitas modern yang menunjang pembelajaran.",
    category: "Pendaftaran",
    date: "2024-12-15",
    author: "Admin Sekolah",
    image_url: "/images/slide1.jpg",
    slug: "penerimaan-siswa-baru-2025-2026",
    is_featured: true,
  },
  {
    id: 2,
    title: "Prestasi Gemilang Tim Olimpiade Sains Nasional",
    excerpt:
      "Siswa-siswi kami berhasil meraih medali emas dan perak dalam kompetisi Olimpiade Sains Nasional tingkat provinsi.",
    category: "Prestasi",
    date: "2024-12-10",
    author: "Tim Akademik",
    image_url: "/images/slide2.jpg",
    slug: "prestasi-olimpiade-sains-nasional",
    is_featured: false,
  },
  {
    id: 3,
    title: "Kegiatan Bakti Sosial Peduli Lingkungan",
    excerpt:
      "Program CSR sekolah dalam kegiatan pembersihan lingkungan dan penanaman pohon untuk mendukung kelestarian alam.",
    category: "Kegiatan",
    date: "2024-12-08",
    author: "OSIS",
    image_url: "/images/slide3.jpg",
    slug: "bakti-sosial-peduli-lingkungan",
    is_featured: false,
  },
];

export const latest_announcements = [
  {
    id: 1,
    title: "Jadwal Ujian Tengah Semester Genap 2024/2025",
    content:
      "Ujian Tengah Semester akan dilaksanakan pada tanggal 3-7 Februari 2025. Seluruh siswa diharapkan mempersiapkan diri dengan baik.",
    category: "Akademik",
    priority: "high",
    date: "2024-12-20",
    valid_until: "2025-02-07",
    is_urgent: true,
  },
  {
    id: 2,
    title: "Libur Semester dan Tahun Baru 2025",
    content:
      "Libur semester dan tahun baru dimulai tanggal 23 Desember 2024 hingga 6 Januari 2025. Masuk kembali tanggal 7 Januari 2025.",
    category: "Umum",
    priority: "medium",
    date: "2024-12-18",
    valid_until: "2025-01-07",
    is_urgent: false,
  },
  {
    id: 3,
    title: "Pendaftaran Ekstrakurikuler Semester Genap",
    content:
      "Pendaftaran kegiatan ekstrakurikuler semester genap dibuka mulai tanggal 8-15 Januari 2025 melalui portal siswa.",
    category: "Ekstrakurikuler",
    priority: "medium",
    date: "2024-12-16",
    valid_until: "2025-01-15",
    is_urgent: false,
  },
  {
    id: 4,
    title: "Rapat Orang Tua Siswa Kelas XII",
    content:
      "Mengundang seluruh orang tua siswa kelas XII untuk rapat persiapan ujian nasional pada Sabtu, 11 Januari 2025 pukul 08.00 WIB.",
    category: "Orang Tua",
    priority: "high",
    date: "2024-12-14",
    valid_until: "2025-01-11",
    is_urgent: false,
  },
];

// Teachers data using underscore field_names as per instructions

export const teachers_data = [
  {
    id: 1,
    name: "Dr. Siti Nurhaliza, M.Pd",
    position: "Kepala Sekolah",
    subject: "Manajemen Pendidikan",
    experience_years: 15,
    education: "S2 Manajemen Pendidikan - Universitas Pendidikan Indonesia",
    specialization: [
      "Kepemimpinan Pendidikan",
      "Kurikulum Merdeka",
      "Manajemen Sekolah",
    ],
    photo_url: "/images/profile.jpg",
    email: "kepala@sekolahkita.ac.id",
    bio: "Berpengalaman lebih dari 15 tahun dalam dunia pendidikan dengan fokus pada pengembangan kurikulum dan kepemimpinan sekolah.",
    achievements: [
      "Guru Berprestasi Nasional 2020",
      "Sertifikat ISO 9001:2015",
      "Pelatihan Kepemimpinan Harvard",
    ],
  },
  {
    id: 2,
    name: "Ahmad Hidayat, S.Pd, M.Si",
    position: "Wakil Kepala Sekolah",
    subject: "Matematika",
    experience_years: 12,
    education: "S2 Pendidikan Matematika - Institut Teknologi Bandung",
    specialization: [
      "Matematika Terapan",
      "Statistika",
      "Olimpiade Matematika",
    ],
    photo_url: "/images/profile.jpg",
    email: "wakasek@sekolahkita.ac.id",
    bio: "Spesialis pendidikan matematika dengan track record membina siswa juara olimpiade tingkat nasional.",
    achievements: [
      "Pembina Tim Olimpiade Matematika",
      "Penulis Buku Matematika SMA",
      "Juara 1 Guru Inovatif 2021",
    ],
  },
  {
    id: 3,
    name: "Dr. Fatimah Azzahra, M.Pd",
    position: "Guru Senior",
    subject: "Bahasa Indonesia",
    experience_years: 18,
    education: "S3 Pendidikan Bahasa - Universitas Gadjah Mada",
    specialization: ["Sastra Indonesia", "Linguistik", "Penulisan Kreatif"],
    photo_url: "/images/profile.jpg",
    email: "fatimah@sekolahkita.ac.id",
    bio: "Doktor pendidikan bahasa dengan pengalaman mengajar dan penelitian sastra Indonesia modern.",
    achievements: [
      "Penulis 5 Buku Sastra",
      "Dosen Tamu Universitas",
      "Peneliti Bahasa Nasional",
    ],
  },
  {
    id: 4,
    name: "Ir. Bambang Sutrisno, M.T",
    position: "Guru Senior",
    subject: "Fisika",
    experience_years: 14,
    education: "S2 Teknik Fisika - Institut Teknologi Sepuluh Nopember",
    specialization: ["Fisika Eksperimen", "Teknologi Pembelajaran", "Robotika"],
    photo_url: "/images/profile.jpg",
    email: "bambang@sekolahkita.ac.id",
    bio: "Engineer yang beralih ke dunia pendidikan dengan keahlian dalam eksperimen fisika dan teknologi.",
    achievements: [
      "Pembina Klub Robotika",
      "Inovator Lab Fisika Digital",
      "Mentor Kompetisi Sains",
    ],
  },
  {
    id: 5,
    name: "Maria Christina, S.Pd, M.Hum",
    position: "Guru Senior",
    subject: "Bahasa Inggris",
    experience_years: 10,
    education: "S2 Sastra Inggris - Universitas Indonesia",
    specialization: [
      "TOEFL/IELTS Preparation",
      "English Literature",
      "Cross-Cultural Communication",
    ],
    photo_url: "/images/profile.jpg",
    email: "maria@sekolahkita.ac.id",
    bio: "Spesialis bahasa Inggris dengan sertifikasi internasional dan pengalaman mengajar di berbagai negara.",
    achievements: [
      "TESOL Certified",
      "English Camp Coordinator",
      "International Exchange Program",
    ],
  },
  {
    id: 6,
    name: "Dr. Handoko Wijaya, M.Pd",
    position: "Guru Senior",
    subject: "Kimia",
    experience_years: 16,
    education: "S3 Pendidikan Kimia - Universitas Negeri Malang",
    specialization: [
      "Kimia Analitik",
      "Green Chemistry",
      "Pembelajaran Inkuiri",
    ],
    photo_url: "/images/profile.jpg",
    email: "handoko@sekolahkita.ac.id",
    bio: "Doktor kimia dengan fokus penelitian pada green chemistry dan inovasi pembelajaran sains.",
    achievements: [
      "Peneliti Kimia Hijau",
      "Pembina Lab Kimia Modern",
      "Penulis Jurnal Internasional",
    ],
  },
];

// Footer data constants
export const footer_quick_links = [
  { name: "Profil Sekolah", href: "/profil" },
  { name: "Visi & Misi", href: "/visi-misi" },
  { name: "Fasilitas", href: "/fasilitas" },
  { name: "Tenaga Pendidik", href: "/guru" },
];

export const footer_academic_links = [
  { name: "Kurikulum", href: "/akademik/kurikulum" },
  { name: "Jadwal Pelajaran", href: "/akademik/jadwal" },
  { name: "Kalender Akademik", href: "/akademik/kalender" },
  { name: "Prestasi Siswa", href: "/akademik/prestasi" },
];

export const footer_information_links = [
  { name: "Berita Sekolah", href: "/berita" },
  { name: "Pengumuman", href: "/pengumuman" },
  { name: "Galeri Kegiatan", href: "/galeri" },
  { name: "Ekstrakurikuler", href: "/ekstrakurikuler" },
];

export const footer_contact_info = [
  {
    type: "address",
    text: "Jl. Pendidikan No. 123, Jakarta Selatan 12345",
  },
  {
    type: "phone",
    text: "+62 21 1234 5678",
  },
  {
    type: "email",
    text: "info@sekolahkita.ac.id",
  },
  {
    type: "hours",
    text: "Senin - Jumat: 07:00 - 16:00 WIB",
  },
];

export const footer_social_media = [
  {
    name: "Facebook",
    href: "https://facebook.com/sekolahkita",
    platform: "facebook",
  },
  {
    name: "Instagram",
    href: "https://instagram.com/sekolahkita",
    platform: "instagram",
  },
  {
    name: "YouTube",
    href: "https://youtube.com/@sekolahkita",
    platform: "youtube",
  },
];

export const footer_legal_links = [
  { name: "Kebijakan Privasi", href: "/privacy-policy" },
  { name: "Syarat & Ketentuan", href: "/terms-of-service" },
  { name: "Peta Situs", href: "/sitemap" },
];

export const school_info = {
  name: "Sekolah Kita",
  description:
    "Sekolah Kita berkomitmen memberikan pendidikan berkualitas tinggi dengan mengintegrasikan nilai-nilai karakter dan teknologi modern untuk mempersiapkan generasi unggul masa depan.",
};

export const sidebar_menu_items = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: Home,
  },
  {
    title: "Siswa",
    url: "/dashboard/students",
    icon: Users,
    sub_items: [
      {
        title: "Daftar Siswa",
        url: "/dashboard/students",
      },
      {
        title: "Tambah Siswa",
        url: "/dashboard/students/add",
      },
      {
        title: "Kehadiran",
        url: "/dashboard/students/attendance",
      },
    ],
  },
  {
    title: "Guru",
    url: "/dashboard/teachers",
    icon: GraduationCap,
    sub_items: [
      {
        title: "Daftar Guru",
        url: "/dashboard/teachers",
      },
      {
        title: "Tambah Guru",
        url: "/dashboard/teachers/add",
      },
    ],
  },
  {
    title: "Mata Pelajaran",
    url: "/dashboard/subjects",
    icon: BookOpen,
    sub_items: [
      {
        title: "Daftar Mapel",
        url: "/dashboard/subjects",
      },
      {
        title: "Tambah Mapel",
        url: "/dashboard/subjects/add",
      },
    ],
  },
  {
    title: "Kelas",
    url: "/dashboard/classes",
    icon: School,
    sub_items: [
      {
        title: "Daftar Kelas",
        url: "/dashboard/classes",
      },
      {
        title: "Tambah Kelas",
        url: "/dashboard/classes/add",
      },
    ],
  },
  {
    title: "Jadwal",
    url: "/dashboard/schedule",
    icon: Calendar,
  },
  {
    title: "Nilai",
    url: "/dashboard/grades",
    icon: BarChart3,
  },
  {
    title: "Laporan",
    url: "/dashboard/reports",
    icon: FileText,
  },
  {
    title: "Pengumuman",
    url: "/dashboard/announcements",
    icon: MessageSquare,
  },
  {
    title: "Artikel",
    url: "/dashboard/articles",
    icon: NewspaperIcon,
    sub_items: [
      {
        title: "Daftar Artikel",
        url: "/dashboard/articles",
      },
      {
        title: "Tulis Artikel",
        url: "/dashboard/articles/create",
      },
      {
        title: "Kategori",
        url: "/dashboard/articles/categories",
      },
    ],
  },
];
