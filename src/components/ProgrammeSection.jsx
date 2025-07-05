import React from 'react';
import imgHeader from '../assets/ProgrammeImages/header.webp';
import img1 from '../assets/ProgrammeImages/img1.webp';
import img2 from '../assets/ProgrammeImages/img2.webp';
import img3 from '../assets/ProgrammeImages/img3.webp';

export default function ProgrammeSection() {
  const learnings = [
    "Apprentissage théoriques en présentiel",
    "Apprentissage sur supports numériques",
    "Travaux individuels de l’étudiant",
    "Apprentissage en entreprise",
  ];

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
        <img src={imgHeader} alt="Programme" className="w-full lg:w-1/2 rounded-xl" />
        <div className= "flex flex-col justify-between lg:w-1/2 h-60">
          <h2 className="font-garamond text-[40px] font-extrabold text-primary mb-4 text-[var(--primary)]">Le programme pédagogique</h2>
          <p className="text-[var(--primary)] mb-4 text-sm">
            Suivant le système LMD, jusqu’au Master, notre formation repose sur un programme pédagogique conçu en adéquation avec les attentes du marché.
            La formation est sanctionnée par un diplôme de Licence et de Master en Informatique reconnu par le MESupRes de Madagascar.
          </p>
          <button className="w-52 font-bold bg-white text-[var(--primary)] px-5 py-2 rounded border-2 border-[var(--primary)] hover:bg-[var(--primary)] hover:text-white transition">Notre Programme</button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
        {learnings.map((learning, index) => (
          <div key={index} className="bg-yellow-100 px-7 pr-2 py-3 rounded-lg text-left ">
            <p className="font-bold text-4xl text-[var(--secondary)] mb-2">25%</p>
            <p className="font-bold text-xl text-[var(--primary)] pr-3 mb-5">{learning}</p>
          </div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        {[img1, img2, img3].map((src, index) => (
          <img key={index} src={src} alt={`Illustration ${index + 1}`} className="rounded-lg w-full h-auto object-cover" />
        ))}
      </div>
    </section>
  );
}
