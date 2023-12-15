import React from 'react';
import Sidenav from './_components/Sidenav';

function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid h-screen grid-rows-[auto_1fr] md:grid-cols-[16rem_1fr] ">
      <header className="border-b p-3">header</header>
      <aside className="fixed bottom-0 w-full border md:static md:row-span-full">
        <Sidenav />
      </aside>
      <main className="p-3">{children}</main>
    </div>
  );
}

export default AdminLayout;
