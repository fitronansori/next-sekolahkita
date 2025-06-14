import Link from 'next/link';

import Logo from '@/components/common/Logo';
import MobileMenu from '@/components/layouts/root/Header/MobileMenu';
import NavLinks from '@/components/layouts/root/Header/NavLinks';
import { Button } from '@/components/ui/button';

const Header = () => {
  const login = true;

  return (
    <header className="bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-4">
          <Logo className="hidden lg:block" />

          <Logo className="lg:hidden" show_text={false} />

          <NavLinks className="hidden lg:flex" />
        </div>

        <div className="flex items-center gap-4">
          {login ? (
            <Button variant="outline" asChild>
              <Link href="/dashboard">Dashboard</Link>
            </Button>
          ) : (
            <Button asChild>
              <Link href="/login">Login</Link>
            </Button>
          )}

          <MobileMenu />
        </div>
      </div>
    </header>
  );
};
export default Header;
