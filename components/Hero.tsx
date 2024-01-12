import React from 'react';
import { Button } from './ui/button';
import Image from 'next/image';

function Hero() {
  return (
    <div className="grid p-3 sm:p-6 md:grid-cols-2 md:p-9">
      {/* left side */}
      <div className="relative gap-3 justify-self-end sm:gap-6">
        <h2 className="text-4xl capitalize lg:text-6xl ">
          Let&apos;s Book like
          <span className="font-semibold md:text-7xl"> future</span>
        </h2>
        <div className="my-3 sm:my-6 ">
          <p className="text-justify">
            Explore futsal courts near you by searching or giving you location.
          </p>
          <p>
            Now you can book the nearby futsals with seeing the availability.
          </p>
        </div>
        <Button variant="default" className="mt-6">
          Book
        </Button>
        <div className="fill-[linear-gradient(180deg,hsla(194.35294117647058, 100%, 50%, 0.467)_99.99%,rgba(0,255,148,0.00)_100%)] absolute inset-0 h-72 w-96 bg-[#00c2ff77] bg-blend-darken blur-3xl" />
      </div>
      {/* right side */}
      <div className="justify-self-center">
        <Image
          src="/football.png"
          alt="Football image"
          height={250}
          width={250}
          className="duration-[2000ms] animate-bounce transition-all"
        />
      </div>
    </div>
  );
}

export default Hero;
