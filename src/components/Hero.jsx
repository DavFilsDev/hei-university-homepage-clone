import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
 
} from "@fortawesome/free-solid-svg-icons";

const slides = [
  {
    image: "images/hei-banner-1.webp",
    text: "\"L'éducation est l'arme la plus puissante pour changer le monde\" selon Nelson Mandela. \"L'éducation dans l'informatique est une arme très puissante pour lutter contre la pauvreté à Madagascar\" selon HEI. C'est notre mission.",
  },
  {
    image: "images/hei-banner-2.webp",
    text: "Des entreprises partenaires et une équipe pédagogique et administrative qui travaille sans relâche pour la montée en compétences de nos étudiants.",
  },
  {
    image: "images/hei-banner-3.webp",
    text: "Une infrastructure de qualité et un programme pédagogique qui répond aux besoins du marché pour l'employabilité de nos étudiants.",
  },
];

const Hero = () => {
  const [index, setIndex] = useState(0);

  // Auto défilement toutes les 2s
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 2000);
    return () => clearInterval(timer);
  }, [index]);

  const handleSlideChange = (i) => setIndex(i);
  const prevSlide = () => setIndex((index - 1 + slides.length) % slides.length);
  const nextSlide = () => setIndex((index + 1) % slides.length);

  return (
    <>
      <div
        className="text-white py-[20vh] w-full flex flex-col gap-y-[4rem] h-screen bg-cover bg-center mt-[10vh] inset-0 bg-opacity-10 relative"
        style={{ backgroundImage: `url(${slides[index].image})` }}
      >
     
        <button
          onClick={prevSlide}
          className="absolute font-bold left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/30 hover:text-[var(--primary)] rounded-full px-5 z-10 text-[50px]"
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>

        <button
          onClick={nextSlide}
          className="absolute font-bold right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/30 hover:text-[var(--primary)] rounded-full px-5 z-10 text-[50px]"
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>

        <h1 className="text-center text-[60px] font-bold">
          Haute École d'Informatique
        </h1>

        <div className="m-auto w-[50vw] flex justify-center items-center">
          <p className="text-[20px] text-center font-bold mb-4">
            {slides[index].text}
          </p>
        </div>

        <div className="flex flex-row justify-center items-center gap-[10vw] pb-[4rem]">
          <div className=" bg-white border-white border-2 py-4 flex justify-center items-center text-center p-1 w-[13vw]">
            <a href="">
              <span className="text-[#001948] font-bold text-2xl">
                Inscrivez-vous ici
              </span>
            </a>
          </div>
          <div className="  py-4 text-white bg-[#fcaf3b] flex justify-center items-center text-center p-1 w-[13vw]">
            <a href="">
              <span className="text-white font-bold text-2xl ">
                Emploi du temps
              </span>
            </a>
          </div>
          <div className="bg-[#001948] text-white py-4 flex justify-center items-center text-center p-1 w-[17vw]">
            <a href="">
              <span className="text-white font-bold text-2xl">
                Programme pédagogique
              </span>
            </a>
          </div>
        </div>

        <p className="text-center text-[30px]">
          Habilitation MESupRES, suivant l'arrêté N°31309/2023
        </p>

       
        <div className="absolute bottom-8 w-full flex justify-center gap-3 z-10">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => handleSlideChange(i)}
              className={`w-3 h-3 rounded-full ${
                index === i ? "bg-white" : "bg-gray-400"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Hero;
