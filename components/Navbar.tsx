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
    <nav className="flex items-center justify-between p-3">
      <Logo />
      <div className="flex items-center sm:gap-6">
        <NavLink links={links} />
        <Button
          variant="secondary"
          size="default"
          className="hidden text-base font-medium sm:block"
        >
          Login
        </Button>
        <Button variant="ghost" className="cursor-pointer text-white sm:hidden">
          <Menu />
        </Button>
      </div>
    </nav>
  );
}

export default Navbar;
