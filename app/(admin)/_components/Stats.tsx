import React from 'react';
import StatCard from '../_components/StatCard';
import { Banknote, BarChart, Briefcase } from 'lucide-react';

function Stats({
  numBookings,
  sales,
  numGrounds,
}: {
  numBookings: number;
  sales: number | string;
  numGrounds: number | string;
}) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <StatCard
        label="Bookings"
        data={numBookings}
        color="#075985"
        icon={<Briefcase size={28} />}
      />
      <StatCard
        label="Sales"
        data={sales}
        color="#166534"
        icon={<Banknote size={28} />}
      />
      <StatCard
        label="Occupancy Rate"
        data={numGrounds}
        color="#854d0e"
        icon={<BarChart size={28} />}
      />
    </div>
  );
}

export default Stats;
