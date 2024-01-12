import React from 'react';
import {
  CalendarCheck2,
  LandPlot,
  LayoutDashboard,
  Settings,
  Users,
} from 'lucide-react';

import AdminLogo from './AdminLogo';
import SideLinks from './SideLinks';

const links = [
  { label: 'Dashboard', href: '/admin', icon: <LayoutDashboard /> },
  { label: 'Bookings', href: '/admin/bookings', icon: <CalendarCheck2 /> },
  { label: 'Users', href: '/admin/users', icon: <Users /> },
  { label: 'Grounds', href: '/admin/grounds', icon: <LandPlot /> },
  { label: 'Settings', href: '/admin/settings', icon: <Settings /> },
];

function Sidenav() {
  return (
    <nav className="z-[99] flex h-full w-full gap-9 md:flex-col md:px-3">
      <AdminLogo />
      <SideLinks links={links} />
    </nav>
  );
}

export default Sidenav;
