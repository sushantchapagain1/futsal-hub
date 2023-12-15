import React from 'react';

function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid h-screen grid-cols-[10rem_1fr] grid-rows-[auto_1fr]">
      <header className="">header</header>
      <aside className="row-span-full ">aside</aside>
      <main className=" bg-blue-500">{children}</main>
    </div>
  );
}

export default AdminLayout;
