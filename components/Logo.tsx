import Image from 'next/image';
import Link from 'next/link';

function Logo() {
  return (
    <Link href="/" role="link">
      <Image src="/logo.png" alt="app logo" width={150} height={20} />
    </Link>
  );
}

export default Logo;
