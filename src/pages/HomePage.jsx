import Hero from '../components/Hero';
import Deboucher from '../components/Debouche';
import Domaine from '../components/Domaine';
import Admission from '../components/Admission';
import Apropos from '../components/Apropos';
import Paterns from '../components/Paterns';
import TechSection from '../components/TechSection';
import ProgrammeSection from '../components/ProgrammeSection';
import PedagogicTeam from '../components/PedagogicTeams';

export default function HomePage() {
  return (
    <main className="flex flex-col">
      <Hero/>
      <Apropos/>
      <PedagogicTeam />
      <Deboucher/>
      <Domaine/>
      <Admission/>
      <ProgrammeSection />
      <TechSection />
      <Paterns />
    </main>
  );
}
