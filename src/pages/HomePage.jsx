import Hero from '../components/Hero';
import Deboucher from '../components/Debouche';
import Domaine from '../components/Domaine';
import Admission from '../components/Admission';
import Apropos from '../components/Apropos';
import Paterns from '../components/Paterns';

export default function HomePage() {
  return (
    <main className="flex flex-col gap-8">
      <Hero/>
      <Apropos/>
      <Deboucher/>
      <Domaine/>
      <Admission/>
      <Paterns />
    </main>
  );
}
