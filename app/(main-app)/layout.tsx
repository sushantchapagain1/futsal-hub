import Navbar from '@/components/Navbar';
import React from 'react';

function layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <Navbar />
      {children}
    </main>
  );
}

export default layout;
