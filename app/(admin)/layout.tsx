import React from 'react';

function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid h-screen grid-cols-[18rem_1fr] grid-rows-[auto_1fr]">
      <header className=" bg-red-500">header</header>
      <aside className="row-span-full bg-blue-500">sidebar</aside>
      <main className="bg-green-500"> {children}</main>
    </div>
  );
}

export default AdminLayout;
