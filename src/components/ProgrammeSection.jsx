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
        <div className="lg:w-1/2">
          <h2 className="text-3xl font-bold text-primary mb-4">Le programme pédagogique</h2>
          <p className="text-gray-700 mb-4">
            Suivant le système LMD, jusqu’au Master, notre formation repose sur un programme pédagogique conçu en adéquation avec les attentes du marché.
            La formation est sanctionnée par un diplôme de Licence et de Master en Informatique reconnu par le MESupRes de Madagascar.
          </p>
          <button className="bg-primary text-white px-5 py-2 rounded hover:bg-secondary transition">Notre Programme</button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
        {learnings.map((learning, index) => (
          <div key={index} className="bg-yellow-100 p-4 rounded-lg text-center">
            <p className="text-3xl font-bold text-secondary mb-2">25%</p>
            <p className="text-primary font-semibold">{learning}</p>
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
