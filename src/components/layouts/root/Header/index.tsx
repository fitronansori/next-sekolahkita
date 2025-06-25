import { SignedIn, SignedOut } from "@clerk/nextjs";

import Link from "next/link";

import ClientOnlyUserButton from "@/components/common/ClientOnlyUserButton";
import Logo from "@/components/common/Logo";
import MobileMenu from "@/components/layouts/root/Header/MobileMenu";
import NavLinks from "@/components/layouts/root/Header/NavLinks";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-background sticky top-0 z-50 w-full border-b">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-4">
          <Logo className="hidden lg:flex" />

          <Logo className="lg:hidden" show_text={false} />

          <NavLinks className="hidden lg:flex" />
        </div>

        <div className="flex items-center gap-4">
          <SignedIn>
            <div className="flex items-center gap-4">
              <Button variant="outline" asChild>
                <Link href="/dashboard">Dashboard</Link>
              </Button>

              <ClientOnlyUserButton />
            </div>
          </SignedIn>

          <SignedOut>
            <Button asChild>
              <Link href="/sign-in">Login</Link>
            </Button>
          </SignedOut>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
};
export default Header;
