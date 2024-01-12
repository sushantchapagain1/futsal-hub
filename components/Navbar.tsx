import React from 'react';
import Logo from './Logo';
import { Menu } from 'lucide-react';
import NavLink from './NavLink';
import { Button } from './ui/button';

const links = [
  { label: 'Home', href: '/' },
  { label: 'How it works', href: '/how-it-works' },
  { label: 'Services', href: '/pricing' },
  { label: 'About Us', href: '/about' },
];

function Navbar() {
  return (
    <nav className="flex items-center justify-between">
      <Logo />
      <NavLink links={links} />
      <div>
        <Button
          variant="default"
          size={'default'}
          className="hidden font-medium sm:block"
        >
          Login
        </Button>
        {/*TODO trapeziod   */}
        <div />
      </div>
      <button className="cursor-pointer sm:hidden">
        <Menu />
      </button>
    </nav>
  );
}

export default Navbar;
