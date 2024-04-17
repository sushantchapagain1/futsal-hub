import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Searchbar from '@/components/Searchbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Searchbar />
      <main className="mt-8"> main app</main>
    </>
  );
}
