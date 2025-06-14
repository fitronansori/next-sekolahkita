'use client';

import { AlignJustifyIcon, ChevronDownIcon } from 'lucide-react';

import Link from 'next/link';
import * as React from 'react';

import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

import {
  info_sekolah,
  kegiatan_items,
  program_akademik,
  tentang_sekolah_items,
} from '@/constants/data';

const MobileMenu = () => {
  const [open_section, setOpenSection] = React.useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(open_section === section ? null : section);
  };

  return (
    <Sheet>
      <SheetTrigger className="lg:hidden">
        <AlignJustifyIcon className="size-6" />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className="hidden">
          <SheetTitle>Menu Navigasi</SheetTitle>
          <SheetDescription>
            Navigasi lengkap untuk website SekolahKita
          </SheetDescription>
        </SheetHeader>
        <div className="mt-6 flex h-screen flex-col justify-center space-y-4">
          {/* Beranda */}
          <Link
            href="/"
            className="text-foreground hover:bg-accent hover:text-accent-foreground block rounded-md px-3 py-2 text-sm font-medium transition-colors"
          >
            Beranda
          </Link>
          {/* Tentang Sekolah */}
          <div>
            <Button
              variant="ghost"
              onClick={() => toggleSection('tentang')}
              className="flex w-full items-center justify-between rounded-md px-4 py-2 text-sm font-medium transition-colors"
            >
              Tentang Sekolah
              <ChevronDownIcon
                className={`h-4 w-4 transition-transform ${
                  open_section === 'tentang' ? 'rotate-180' : ''
                }`}
              />
            </Button>
            {open_section === 'tentang' && (
              <div className="mt-2 ml-4 space-y-2">
                {tentang_sekolah_items.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="text-muted-foreground hover:text-foreground hover:bg-accent block rounded-md px-4 py-2 text-sm transition-colors"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
          {/* Program Akademik */}
          <div>
            <Button
              variant="ghost"
              onClick={() => toggleSection('akademik')}
              className="flex w-full items-center justify-between rounded-md px-4 py-2 text-sm font-medium transition-colors"
            >
              Program Akademik
              <ChevronDownIcon
                className={`h-4 w-4 transition-transform ${
                  open_section === 'akademik' ? 'rotate-180' : ''
                }`}
              />
            </Button>
            {open_section === 'akademik' && (
              <div className="mt-2 ml-4 space-y-2">
                {program_akademik.map((program) => (
                  <Link
                    key={program.title}
                    href={program.href}
                    className="text-muted-foreground hover:text-foreground hover:bg-accent block rounded-md px-4 py-2 text-sm transition-colors"
                  >
                    {program.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
          {/* Informasi */}
          <div>
            <Button
              variant="ghost"
              onClick={() => toggleSection('informasi')}
              className="flex w-full items-center justify-between rounded-md px-4 py-2 text-sm font-medium transition-colors"
            >
              Informasi
              <ChevronDownIcon
                className={`h-4 w-4 transition-transform ${
                  open_section === 'informasi' ? 'rotate-180' : ''
                }`}
              />
            </Button>
            {open_section === 'informasi' && (
              <div className="mt-2 ml-4 space-y-2">
                {info_sekolah.map((info) => (
                  <Link
                    key={info.title}
                    href={info.href}
                    className="text-muted-foreground hover:text-foreground hover:bg-accent block rounded-md px-4 py-2 text-sm transition-colors"
                  >
                    {info.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
          {/* Kegiatan */}
          <div>
            <Button
              variant="ghost"
              onClick={() => toggleSection('kegiatan')}
              className="flex w-full items-center justify-between rounded-md px-4 py-2 text-sm font-medium transition-colors"
            >
              Kegiatan
              <ChevronDownIcon
                className={`h-4 w-4 transition-transform ${
                  open_section === 'kegiatan' ? 'rotate-180' : ''
                }`}
              />
            </Button>
            {open_section === 'kegiatan' && (
              <div className="mt-2 ml-4 space-y-2">
                {kegiatan_items.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="text-muted-foreground hover:text-foreground hover:bg-accent block rounded-md px-4 py-2 text-sm transition-colors"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
          {/* Kontak */}
          <Link
            href="/kontak"
            className="text-foreground hover:bg-accent hover:text-accent-foreground block rounded-md px-3 py-2 text-sm font-medium transition-colors"
          >
            Kontak
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
};
export default MobileMenu;
