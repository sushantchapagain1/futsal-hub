import Logo from './logo';
import { Menu } from 'lucide-react';
import NavLink from './nav-link';
import { Button } from './ui/button';
import Link from 'next/link';

function Navbar() {
  return (
    <nav className="bg-primary">
      <div className="container flex items-center justify-between p-3">
        <Logo />
        <div className="flex items-center sm:gap-6">
          <NavLink />
          <Button
            asChild
            variant="secondary"
            size="default"
            className="hidden text-base font-medium sm:block"
          >
            <Link href="/login">Login</Link>
          </Button>
          <Button
            variant="ghost"
            className="cursor-pointer text-background sm:hidden"
          >
            <Menu />
          </Button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
