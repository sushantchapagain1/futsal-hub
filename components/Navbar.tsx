import { FolderHeart, Heart } from 'lucide-react';
import Logo from '@/components/Logo';

import Button from './ui/Button';
import NavLink from './NavLink';

const links = [
  {
    label: 'How it works',
    href: 'how-it-works',
  },
  {
    label: 'Pricing',
    href: 'pricing',
  },
  {
    label: <FolderHeart />,
    href: 'bookings',
  },
  {
    label: <Heart />,
    href: 'favorites',
  },
  {
    label: <Button>Book futsal</Button>,
    href: 'booking-new',
  },
] as const;

function Navbar() {
  return (
    <div className="flex items-center justify-between">
      <Logo />
      <NavLink links={links} />
    </div>
  );
}

export default Navbar;
