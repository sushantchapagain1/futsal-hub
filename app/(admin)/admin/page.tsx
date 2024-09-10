import Heading from '../_components/heading';
import Stats from '../_components/stats';
import RecentBookings from '../_components/recent-bookings';

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
