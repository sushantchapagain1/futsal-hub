import React from 'react';

function Heading({ children }: { children: React.ReactNode }) {
  return <h2 className="mb-4 text-2xl font-bold">{children}</h2>;
}

export default Heading;
