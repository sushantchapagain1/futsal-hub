import React from 'react';

import Heading from '../_components/Heading';
import Stats from '../_components/Stats';
import RecentBookings from '../_components/RecentBookings';

function AdminHomePage() {
  return (
    <>
      <Heading>Dashboard</Heading>
      <Stats numBookings={17} sales={'NPR 55,510'} numGrounds={'8%'} />
      <RecentBookings />
    </>
  );
}

export default AdminHomePage;
