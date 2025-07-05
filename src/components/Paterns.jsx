import nxta from '../assets/paternsImages/LOGO-NEXTA.webp';
import pn from '../assets/paternsImages/PN_Logo_baseline_color_ENG.png';
import yooz from '../assets/paternsImages/Yooz-2023-Logo-2.webp';
import etech from '../assets/paternsImages/logo-etech.png';
import emit from '../assets/paternsImages/logo_emit.png';
import numer from '../assets/paternsImages/Logo-Numer-vf.png';
import paterns from '../assets/paternsImages/YIF_LOGO_512x512_BL_on_WH-1.webp';
import vf from '../assets/paternsImages/bp-logo-full-1024x331.webp';
import kanteco from '../assets/paternsImages/logo-kante-company-1.png';


export default function Partners() {
  const partners = [
    { name: "NXTA", logo: nxta, link: "https://www.nextaccelerator.mg/" },
    { name: "PN", logo: pn, link: "https://www.passerellesnumeriques.org/" },
    { name: "Yooz", logo: yooz, link: "https://www.yooz.fr/" },
    { name: "Etech", logo: etech, link: "https://etechconsulting-mg.com/" },
    { name: "EMIT", logo: emit, link: "https://emit.mg/" },
    { name: "Numer", logo: numer, link: "https://www.numer.mg/" },
    { name: "Partners", logo: paterns, link: "https://partners.example.com/" },
    { name: "VF", logo: vf, link: "https://youritfactory.com/" },
    { name: "Kanteco", logo: kanteco, link: "https://kanteco.com/" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="font-garamond text-[40px] font-extrabold text-[var(--primary)] mb-4">Nos partenaires</h2>
        <p className="text-[var(--primary)] mb-10 max-w-3xl mx-auto">
          L’employabilité de nos étudiants se base sur la pertinence de notre programme pédagogique
          et de la composition de notre corps enseignant mais aussi du soutien et la collaboration
          des entreprises partenaires.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 items-center justify-items-center max-w-5xl mx-auto">
          {partners.map((partner) => (
            <a
              key={partner.name}
              href={partner.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-8 md:h-14"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
