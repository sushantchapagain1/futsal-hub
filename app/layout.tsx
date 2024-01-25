import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import './globals.css';

const open_sans = Open_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Futsal Hub',
  description:
    'Futsal hub is app where you can book futsal by searching or from your location with the available status of all futsals around you.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="">
      <body className={`${open_sans.className} antialiased`}>{children}</body>
    </html>
  );
}
