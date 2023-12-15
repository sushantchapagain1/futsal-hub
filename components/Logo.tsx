import Link from 'next/link';

function Logo() {
  return (
    <Link href="/" role="link" className="hidden md:block">
      <span className=" p-3 text-xl font-medium uppercase tracking-widest md:block">
        Futsalhub
      </span>
    </Link>
  );
}

export default Logo;
