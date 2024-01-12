import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <div className="container">
      <Navbar />
      <main className="">
        <Hero />
      </main>
    </div>
  );
}
