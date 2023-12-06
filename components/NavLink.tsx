'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function NavLink({ links }: any) {
  const pathName = usePathname().split('/')[1];

  return (
    <nav>
      <ul className="flex items-center gap-6">
        {links.map((link: any) => {
          const isActive = pathName.match(link.href);
          return (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`${isActive ? 'text-teal-500' : ''}`}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default NavLink;
