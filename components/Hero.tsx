import React from 'react';
import Image from 'next/image';
import Navbar from './Navbar';

function Hero() {
  return (
    <div className="bg-brand">
      <div className="lg:container">
        <Navbar />
        <div className="flex flex-col items-center justify-between gap-9 py-16 sm:mx-5 lg:flex-row">
          {/* left side */}
          <div className="self-center">
            <h2 className="mb-3 text-xl font-extrabold text-white sm:text-2xl md:text-5xl">
              Find available futsal near you
            </h2>
            <p className="text-xl text-white">
              Search and book your matching futsal by location, price,
              availiblity and more.
            </p>
          </div>
          {/* right side */}
          <div>
            <Image
              src="/football.png"
              alt="Football image"
              height={200}
              width={200}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
