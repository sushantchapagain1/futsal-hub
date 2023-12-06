import React from 'react';

function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <span>auth layout</span>
      {children}
    </div>
  );
}

export default AuthLayout;
