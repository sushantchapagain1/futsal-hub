import React from 'react';
import Logo from './Logo';
import { Menu } from 'lucide-react';
import NavLink from './NavLink';

const links = [
  { label: 'Home', href: '/' },
  { label: 'How it works', href: '/how-it-works' },
  { label: 'Services', href: '/pricing' },
  { label: 'login', href: '/login' },
];

function Navbar() {
  return (
    <nav className="flex items-center justify-between">
      <Logo />
      <NavLink links={links} />
      <button className="cursor-pointer sm:hidden">
        <Menu />
      </button>
    </nav>
  );
}

export default Navbar;
