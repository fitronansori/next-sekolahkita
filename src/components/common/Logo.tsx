import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@/lib/utils';

type LogoProps = {
  link?: string;
  width?: number;
  height?: number;
  className?: string;
  show_text?: boolean;
};

const Logo = ({
  link = '/',
  width = 35,
  height = 35,
  className = '',
  show_text = true,
}: LogoProps) => {
  return (
    <Link
      href={link}
      className={cn(
        'flex items-center gap-3 transition-opacity duration-200 hover:opacity-80',
        className
      )}
    >
      <Image
        src="/svg/logoipsum.svg"
        alt="SekolahKita Logo"
        width={width}
        height={height}
        priority
        className="flex-shrink-0"
      />

      {show_text && (
        <h1 className="text-xl leading-none font-bold uppercase">
          Sekolah Kita
        </h1>
      )}
    </Link>
  );
};

export default Logo;
