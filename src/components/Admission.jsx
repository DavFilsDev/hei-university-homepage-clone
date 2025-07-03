import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightLong } from "@fortawesome/free-solid-svg-icons";

const Admission = () => {
  return (
    <>
      <div className="flex flex-col w-[100vw] h-[80vh]  m-auto justify-center items-center bg-[#6889C0] ">
        <div className="pb-[10vh] gap-y-2 text-[15px] text-white flex flex-col justify-center items-center font-bold linear-gradient(135deg,rgb(74,234,220) 0%,rgb(151,120,209) 20%,rgb(207,42,186) 40%,rgb(238,44,130) 60%,rgb(251,105,98) 80%,rgb(254,248,76) 100%);">
          <h1 className="text-center pb-5 text-[40px]">Admission</h1>
          <p className="text-[20px]">
            Ouverte aux bacheliers de toutes les séries, l’admission chez HEI se
            fait par test de niveau :
          </p>
          <p className="text-[20px]">
            une épreuve de français niveau B2 et d’une épreuve de mathématiques
            niveau Terminale D.
          </p>
        </div>
        <div className=" flex flex-row   w-[63vw]  pb-[2rem] to-[var(--secondary)]">
          <div className=" bg-gradient-to-r from-[#ffe4b3] to-[#fcdaa7] h-[30vh] w-[18vw] flex flex-col justify-center pl-[2rem] pr-[25rem] pb-[5vh]">
            <p className=" text-6xl text-white font-bold">01</p>
            <div className="flex flex-row w-[19vw] justify-center items-center gap-[2rem] ">
              <p className="   text-justify text-[var(--primary)] text-[18px] h-[10vh] ">
                <span className="font-bold "> Dépôt de dossiers :</span> pour
                les bacheliers de toutes séries sans limite d’âge{" "}
              </p>
              <div className="text-5xl text-white">
                <FontAwesomeIcon icon={faRightLong} className="return" />
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-r from-[#f5bc66] to-[#f7d39e] h-[30vh] w-[18vw] flex flex-col justify-center pl-[2rem] pr-[25rem] pb-[5vh]">
            <p className=" text-6xl font-bold text-white">02</p>
            <div className="flex flex-row w-[19vw] justify-center items-center gap-[2rem] ">
              <p className="   text-justify text-[var(--primary)] text-[18px] ">
                <span className="font-bold "> Test de Niveau :</span> composé
                d’une épreuve de français niveau B2 et d’une épreuve de
                mathématiques niveau Terminale D{" "}
              </p>
              <div className="text-5xl text-white">
                <FontAwesomeIcon icon={faRightLong} className="return" />
              </div>
            </div>
          </div>
            <div className="bg-gradient-to-r from-[#f5c366] to-[#ecb664] h-[30vh] w-[18vw] flex flex-col justify-center pl-[2rem] pr-[25rem] pb-[5vh]">
            <p className=" text-6xl font-bold text-white">03</p>
            <div className="flex w-[19vw] gap-[2rem] ">
              <p className=" h-[12vh]  text-justify text-[var(--primary)] text-[18px] ">
                <span className="font-bold ">   Inscription définitive:</span> 
               (si test réussi)
              </p>
              
            </div>
          </div>
        </div>
        <div className="flex flex-row  justify-center itemq-center gap-x-7 py-[4rem]">
            <div className="hover:border-[var(--primary)] hover:bg-[var(--primary)] border-white border-2 px-5 py-2 flex justify-center items-center text-center p-1 w-[14vw]">
                  <a href=""><span className="text-white font-bold text-2xl">Inscrivez-vous ici</span></a>
            </div>
            <div className="hover:border-white  border-2 border-[var(--primary)] hover:bg-white bg-[var(--primary)] flex justify-center items-center text-center p-1 w-[14vw]">
                  <a href=""><span className="text-white font-bold text-2xl hover:text-[var(--primary)]">Résultat de concours</span></a>
            </div>
          
            
        </div>
      </div>
    </>
  );
};

export default Admission;