import { currencyFormatter } from '@/lib/utils';
import { Currency, IndianRupee, OrbitIcon, Zap } from 'lucide-react';

import Image from 'next/image';
import React from 'react';

const grounds = [
  {
    id: '1',
    name: 'Ground LUBIX-A',
    capacity: 'Five-a-side ',
    priceRegular: 1200,
    priceHoliday: 1500,
    image: './hero.jpeg',
  },
  {
    id: '2',
    name: 'Ground LUBIX-B',
    capacity: 'Seven-a-side ',
    priceRegular: 1500,
    priceHoliday: 1800,
    image: './hero.jpeg',
  },
  {
    id: '3',
    name: 'Ground LUBIX-C',
    capacity: 'Five-a-side ',
    priceRegular: 1000,
    priceHoliday: 1200,
    image: './hero.jpeg',
  },
];

function page() {
  return (
    <div className="grid cursor-pointer gap-6 md:grid-cols-2 md:gap-9 lg:grid-cols-3">
      {grounds.map((ground) => (
        <div key={ground.id}>
          <Image
            // src={ground.image}
            src="/hero.jpeg"
            alt={`${ground.name}'s image`}
            className="rounded-t border-x border-t"
            height={1000}
            width={1000}
          />
          <div className="flex flex-col gap-3 rounded-b bg-secondary p-6">
            <div className="flex gap-3">
              <Zap />
              <h3 className="text-xl font-bold">{ground.name}</h3>
            </div>

            <div className="flex gap-3">
              <OrbitIcon />
              <p>{ground.capacity}</p>
            </div>

            <div className="flex gap-3">
              Rs
              <div className="flex items-center gap-2">
                <p>{currencyFormatter(ground.priceRegular)}</p>
                <span className="text-xs">(On Sunday-Friday)</span>
              </div>
            </div>

            <div className="flex gap-3">
              Rs
              <div className="flex items-center gap-2">
                <p>{currencyFormatter(ground.priceHoliday)}</p>
                <span className="text-xs">(On Saturday)</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default page;
