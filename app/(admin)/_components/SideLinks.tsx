'use client';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

type Links = {
  links: {
    label: string;
    href: string;
    icon: React.JSX.Element;
  }[];
};

function SideLinks({ links }: Links) {
  const pathname = usePathname();

  return (
    <ul className="flex flex-1 flex-row justify-evenly gap-3 bg-background py-3 md:flex-grow-0 md:flex-col md:bg-transparent">
      {links.map((link) => {
        const isActive = pathname === link.href;

        return (
          <li key={link.href}>
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'flex w-fit space-x-3 rounded-md p-3 font-medium md:w-auto md:p-3',
                isActive && 'bg-secondary',
              )}
            >
              <span className={cn(isActive && 'text-brand')}>{link.icon}</span>
              <span className="hidden md:block">{link.label}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default SideLinks;
