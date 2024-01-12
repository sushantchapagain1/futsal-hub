import React from 'react';
import { Button } from './ui/button';
import Image from 'next/image';

export function Hero() {
  return (
    <div className="grid p-3 sm:p-6 md:grid-cols-2 md:p-9">
      {/* left side */}

      <div className="gap-3 sm:gap-6">
        <h2 className="text-4xl capitalize lg:text-6xl ">
          Let&apos;s Book like <span className="md:text-6xl"> future</span>
        </h2>
        <div className="my-3 sm:my-6 ">
          <p className="text-justify">
            Explore futsal courts near you by searching or giving you location.
          </p>
          <p>
            Now you can book the nearby futsals with seeing the availability.
          </p>
        </div>
        <Button variant="default">Book</Button>
      </div>
      {/* right side */}
      <div className="justify-self-center">
        <Image
          src="/football.png"
          alt="Football image"
          height={250}
          width={250}
        />
      </div>
    </div>
  );
}
