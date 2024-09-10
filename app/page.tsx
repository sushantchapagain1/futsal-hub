import Hero from '@/components/hero';
import Navbar from '@/components/navbar';
import Searchbar from '@/components/search-bar';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="container">
        <Searchbar />
        <main className="mt-8"> main app</main>
      </div>
    </>
  );
}
