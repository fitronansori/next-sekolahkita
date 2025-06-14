import Link from 'next/link';

import { cn } from '@/lib/utils';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

import {
  info_sekolah,
  kegiatan_items,
  program_akademik,
  tentang_sekolah_items,
} from '@/constants/data';

interface NavLinksProps {
  className?: string;
}

const NavLinks = ({ className }: NavLinksProps) => {
  return (
    <NavigationMenu viewport={false} className={cn(className)}>
      <NavigationMenuList>
        {/* Program Akademik */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Program Akademik</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {program_akademik.map((item) => (
                <ListItem key={item.title} title={item.title} href={item.href}>
                  {item.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Tentang Sekolah */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Tentang Sekolah</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-gradient-to-b p-6 no-underline outline-none select-none focus:shadow-md"
                    href="/profil"
                  >
                    <div className="mt-4 mb-2 text-lg font-medium">
                      Sekolah Kita
                    </div>
                    <p className="text-muted-foreground text-sm leading-tight">
                      Sekolah berkualitas dengan pendidikan terbaik untuk masa
                      depan cerah anak-anak Indonesia.
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              {tentang_sekolah_items.map((item) => (
                <ListItem key={item.title} title={item.title} href={item.href}>
                  {item.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Informasi Sekolah */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Informasi</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[200px] gap-4">
              <li>
                {info_sekolah.map((item) => (
                  <NavigationMenuLink key={item.title} asChild>
                    <Link href={item.href}>{item.title}</Link>
                  </NavigationMenuLink>
                ))}
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Kegiatan */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Kegiatan</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[200px] gap-4">
              <li>
                {kegiatan_items.map((item) => (
                  <NavigationMenuLink key={item.title} asChild>
                    <Link href={item.href}>{item.title}</Link>
                  </NavigationMenuLink>
                ))}
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Kontak - Simple Link */}
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link
              href="/kontak"
              className="bg-background hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50"
            >
              Kontak
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

// ListItem component untuk items di dalam dropdown
const ListItem = ({
  className,
  title,
  children,
  href,
  ...props
}: React.ComponentProps<'a'> & {
  title: string;
  href: string;
}) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className={cn(
            'hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block space-y-1 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none',
            className
          )}
          {...props}
        >
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
};

export default NavLinks;
