import Image from 'next/image';

function Hero() {
  return (
    <div className="bg-primary">
      <div className="container">
        <div className="flex flex-col items-center justify-between gap-9 py-16 sm:mx-5 lg:flex-row">
          <div className="self-center">
            <h2 className="mb-3 text-xl font-extrabold text-white sm:text-2xl md:text-5xl">
              Find available futsal near you
            </h2>
            <p className="mx-3 text-base text-white">
              Search and book your matching futsal by location, price,
              availiblity and more.
            </p>
          </div>

          <div>
            <Image
              src="/football.png"
              alt="Football image"
              height={200}
              width={200}
            />
          </div>
        </div>
        <div />
      </div>
    </div>
  );
}

export default Hero;
