'use client';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { label: 'Home', href: '/' },
  { label: 'How it works', href: '/how-it-works' },
  { label: 'Services', href: '/pricing' },
  { label: 'About Us', href: '/about' },
];

function NavLink() {
  const pathname = usePathname();
  return (
    <ul className="hidden sm:flex sm:gap-6">
      {links.map((link) => {
        const isActive = pathname === link.href;

        return (
          <li
            className={cn(
              `inline-block font-medium
               text-white after:mt-1 after:block
               after:h-[2px] after:w-0 after:bg-white
               after:transition-[width] after:duration-300 after:content-['']
               hover:after:transition-[width] hover:after:duration-300
            `,
              !isActive && 'hover:after:w-full',
              isActive ? 'border-b-2  border-white pb-0' : '',
            )}
            key={link.href}
          >
            <Link href={link.href}>{link.label}</Link>
          </li>
        );
      })}
    </ul>
  );
}

export default NavLink;
