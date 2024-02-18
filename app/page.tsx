import Hero from '@/components/Hero';
import Searchbar from '@/components/Searchbar';

export default function Home() {
  return (
    <div>
      <Hero />
      <Searchbar />
      <main className="container"></main>
    </div>
  );
}
