
import Hero from '../components/Hero';
import Deboucher from '../components/Debouche';
import Domaine from '../components/Domaine';
import Admission from '../components/Admission';
import Apropos from '../components/Apropos';
export default function HomePage() {
  return (
    <main className="flex flex-col gap-8">
      <Hero/>
      <Apropos/>
      <Deboucher/>
      <Domaine/>
      <Admission/>
    </main>
  );
}
