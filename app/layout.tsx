import type { Metadata } from 'next';
import { Red_Rose } from 'next/font/google';
import './globals.css';

const redRose = Red_Rose({ subsets: ['latin'] });

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
      {/* applies to all layout in app */}
      <body className={`${redRose.className} antialiased`}>{children}</body>
    </html>
  );
}
