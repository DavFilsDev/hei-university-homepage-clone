import { useEffect, useState } from "react";
import member1 from "../assets/pedagogicTeams/member1.webp";
import member2 from "../assets/pedagogicTeams/member2.webp";
import member3 from "../assets/pedagogicTeams/member3.webp";
import member4 from "../assets/pedagogicTeams/member4.jpg";
import member5 from "../assets/pedagogicTeams/member5.png";
import member6 from "../assets/pedagogicTeams/member6.jpg";
import member7 from "../assets/pedagogicTeams/member7.png";
import member8 from "../assets/pedagogicTeams/member8.jpg";

const teamMembers = [
  { name: "Mirado RAFENOMANANTSOA", poste: "Data and Business Intelligence Specialist 5+", photo: member1 },
  { name: "Julien RAJERISON", poste: "Lead Développeur | Fondateur de l'association Techzara Madagascar", photo: member2 },
  { name: "RYAN ANDRIAMAHERY", poste: "Développeur back end | Confondateur et Directeur des opérations de HEI", photo: member3 },
  { name: "Jean Aimé Maxa", poste: "Responsable technique cybersécurité chez CES France Continental (Toulouse - France)", photo: member4 },
  { name: "Parison Ravalomanda", poste: "Ingénieur en informatique | Ingénieur logiciel chez Google(Londres -UK)", photo: member5 },
  { name: "Yannick Raharijaona", poste: "Responsable technique ML chez Rocket Science (Ottawa -Canada)", photo: member6 },
  { name: "Dre Tahina Ralitera", poste: "Docteure-Ingénieure, CNRS France | Prix L'Oréal-UNESCO pour les Femmes en Science (2017)", photo: member7 },
  { name: "Dr Lou Maurice", poste: "Docteur-Ingénieure en informatique | Fondateur et Directeur pédagogique de HEI", photo: member8 },
];

export default function PedagogicTeam() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const cardWidth = 260;
    const gap = 24;
    const totalWidth = cardWidth + gap;

    const goNext = () => {
        setCurrentIndex((prev) => (prev + 1) % teamMembers.length);
    };

    const goPrev = () => {
        setCurrentIndex((prev) =>
        prev === 0 ? teamMembers.length - 1 : prev - 1
        );
    };

  const duplicatedMembers = [...teamMembers, ...teamMembers];

    useEffect(() => {
        const interval = setInterval(() => {
            goNext();  
        }, 4000);    

        return () => clearInterval(interval);
    }, []); 


    return (
        <section className="bg-[#6586C7] px-6 py-6 text-white flex flex-col items-center overflow-hidden">
        <h2 className="text-4xl font-bold mb-4">L'équipe pédagogique</h2>
        <p className="text-sm max-w-4xl mb-8 text-center">
            Notre équipe pédagogique se compose d’experts nationaux et internationaux de l’informatique, de la cybersécurité, de l’intelligence artificielle, dont un ingénieur chez Google. Ils sont passionnés par l’informatique et sont engagés vers l’excellence. Nous sommes conscients que cette équipe est la pierre angulaire de l’employabilité de nos étudiants, elle a été soigneusement sélectionnée.
        </p>

        <div className="w-[47vw] flex justify-center items-center overflow-hidden">
            <button onClick={goPrev} className="text-4xl p-2 text-white">&#8249;</button>

            <div className="relative overflow-hidden w-[900px]"> 
                <div
                    className="flex transition-transform duration-500"
                    style={{
                        transform: `translateX(-${currentIndex * totalWidth}px)`,
                    }}
                >
                    {duplicatedMembers.map((member, idx) => (
                    <div
                        key={`${member.name}-${idx}`}
                        className="bg-white rounded-lg py-5 px-0.5 pb-14 w-[260px] flex-shrink-0 h-[320px] flex flex-col items-center justify-between mx-[12px]"
                    >
                        <img
                        src={member.photo}
                        alt={member.name}
                        className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                        />
                        <h3 className="font-bold text-lg text-[var(--primary)] text-center">{member.name}</h3>
                        <p className="text-xs text-[var(--primary)] text-center">{member.poste}</p>
                    </div>
                    ))}
                </div>
                </div>
            <button onClick={goNext} className="text-4xl p-2 text-white">&#8250;</button>
        </div>

        <div className="mt-2 flex justify-center space-x-2">
            {teamMembers.map((_, index) => (
            <span
                key={index}
                className={`w-1 h-1 rounded-full ${
                index === currentIndex % teamMembers.length ? "bg-white" : "bg-gray-400"
                }`}
            />
            ))}
        </div>
        </section>
    );
}
