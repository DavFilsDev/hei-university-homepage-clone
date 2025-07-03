
import Hero from '../components/Hero';
import Deboucher from '../components/Debouche';
import Domaine from '../components/Domaine';
export default function HomePage() {
  return (
    <main className="flex flex-col gap-8">
      <Hero/>
      <Deboucher/>
      <Domaine/>
    </main>
  );
}
