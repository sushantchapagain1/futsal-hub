'use client';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type Links = {
  links: {
    label: string;
    href: string;
  }[];
};

function NavLink({ links }: Links) {
  const pathname = usePathname();
  return (
    <ul className=" hidden sm:flex sm:gap-6">
      {links.map((link) => {
        const isActive = pathname === link.href;

        return (
          <li
            className={cn(
              `inline-block py-2 font-medium 
             after:block after:h-[2px] after:w-0 
            after:bg-sky-500 after:transition-[width] after:duration-300
            after:content-[''] last:rounded-full last:bg-sky-500 last:px-6
            last:text-center last:text-white hover:after:w-full hover:after:transition-[width] hover:after:duration-300
            `,
              isActive ? 'text-sky-500' : '',
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
