"use client"

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavLink({ href, children }) {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={`nav-link ${pathname === href ? 'active' : ''}`}
      aria-current={pathname === href ? 'page' : undefined}
    >
      {children}
    </Link>
  );
}
