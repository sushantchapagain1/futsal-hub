import React from 'react';

import Heading from '../_components/Heading';
import Stats from '../_components/Stats';

function AdminHomePage() {
  return (
    <>
      <Heading>Dashboard</Heading>
      <Stats numBookings={17} sales={'NPR 55,510'} numGrounds={'8%'} />
    </>
  );
}

export default AdminHomePage;
