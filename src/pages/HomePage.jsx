
import Hero from '../components/Hero';
import Deboucher from '../components/Debouche';
export default function HomePage() {
  return (
    <main className="flex flex-col gap-8">
      <Hero/>
      <Deboucher/>
    </main>
  );
}
