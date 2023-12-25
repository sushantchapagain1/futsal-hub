import React from 'react';
import Sidenav from './_components/Sidenav';

import HeaderItems from './_components/HeaderItems';

function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid h-screen grid-rows-[auto_1fr] md:grid-cols-[16rem_1fr] ">
      <header className="flex items-center justify-center gap-1 border-b p-3 md:justify-end">
        <HeaderItems />
      </header>
      <aside className="fixed bottom-0 w-full border-r md:static md:row-span-full">
        <Sidenav />
      </aside>
      <main className="container mb-20 overflow-y-scroll p-3 md:p-6">
        {children}
      </main>
    </div>
  );
}

export default AdminLayout;
