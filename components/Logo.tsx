import Image from 'next/image';
import Link from 'next/link';

function Logo() {
  return (
    <Link href="/" role="link">
      <Image src="/logo.png" alt="app_logo" height={50} width={200} />
    </Link>
  );
}

export default Logo;
