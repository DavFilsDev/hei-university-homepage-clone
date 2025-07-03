
import nxta from "../assets/paternsImages/nxta.webp"
import pn from "../assets/paternsImages/pn.png"
import yooz from "../assets/paternsImages/yooz.webp"
import etech from "../assets/paternsImages/etech.png"
import emit from "../assets/paternsImages/emit.png"
import numer from "../assets/paternsImages/numer.png"
import parterns from "../assets/paternsImages/parterns.webp"
import vf from "../assets/paternsImages/vf.webp"
import kanteco from "../assets/paternsImages/kanteco.png"

export default function PartnersSection() {
  const partners = [
    { name: "NXTA", logo: nxta, link: "http://www.nexta.mg/" },
    { name: "PN", logo: pn, link: "https://www.passerellesnumeriques.org/fr/" },
    { name: "Yooz", logo: yooz, link: "https://www.getyooz.com/fr/" },
    { name: "Etech", logo: etech, link: "https://etechconsulting-mg.com/" },
    { name: "EMIT", logo: emit, link: "https://emit.mg/accueil" },
    { name: "Numer", logo: numer , link:"https://www.numer.tech/" },
    { name: "Partners", logo: parterns, link: "https://www.birdia.fr/home" },
    { name: "VF", logo: vf, link: "https://youritfactory.com/" },
    { name: "Kanteco", logo: kanteco, link: "https://kanteco.com/" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-[#001948] mb-4">Nos partenaires</h2>
        <p className="text-gray-700 mb-10 max-w-3xl mx-auto">
          L’employabilité de nos étudiants se base sur la pertinence de notre programme pédagogique
          et de la composition de notre corps enseignant mais aussi du soutien et la collaboration
          des entreprises partenaires.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 items-center justify-items-center">
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
                className="h-10 md:h-16 object-contain"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
