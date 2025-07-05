const Domaine = () => {
  return (
    <>
      <div className="flex flex-col w-[100vw] h-[100vh]  m-auto justify-center px-[10rem] bg-[#eaeef1] ">
        <div className="pb-[10vh] gap-2 text-[15px] text-[var(--primary)] flex flex-col justify-center items-center  pt-[5rem] linear-gradient(135deg,rgb(238,238,238) 0%,rgb(169,184,195) 100%)">
            <h1 className="font-garamond text-center text-[40px] font-extrabold">Domaines</h1>
            <p className="text-[20px]">Au cours de vos trois ans de formation, naviguez entre les domaines les plus porteurs du numérique du présent et de l’avenir :</p>
        </div>
        <div className=" flex flex-row pb-[4rem] justify-center items-center px-[15rem] gap-x-10 gap-y-[2rem]">
          <div className="bg-white h-[60vh] w-[50vw]  flex flex-col justify-center items-center rounded-2xl px-4 text-center">
            <div className="max-h-[20vh]  items-center">
               <img src="images/Cloud-et-cybersecurite_Plan-de-travail-1-150x150.png" alt="" /> 
            </div>
            <p className="font-garamond text-[var(--secondary)] text-2xl h-[10vh] flex items-center text-center">Cloud et cybersécurité </p>
            <p className="h-[25vh]  text-[var(--primary)]">Maîtrisez les engrenages des outils en ligne interconnectés sur les nuages (comme sur AWS). Ou encore, devenez maître de la sécurisation des données en ligne ou des programmes et applications contre les cybermenaces. Chez HEI, vous allez vous former dans le domaine du cloud et de la cybersécurité.Special?</p>
          </div>
          <div className="bg-white h-[60vh] w-[50vw]  flex flex-col justify-center items-center rounded-2xl px-4 text-center">
            <div className="max-h-[20vh]">
                <img src="images/Intelligence-artificielle_Plan-de-travail-1-150x150.png" alt="" /> 
            </div>
            <p className="font-garamond text-[var(--secondary)] text-2xl  h-[10vh] flex items-center text-center">Ingénierie logicielle</p>   
            <p className="text-[#001948] h-[25vh] ">Le monde de la reconnaissance faciale ou la détection d’obstacles par les voitures semi-autonomes vous fascinent ? Ce n’est pas sorcier, cela s’apprend. Apprenez les bases de l’intelligence artificielle lors de vos cours chez HEI.</p>   
          </div>
          <div className="bg-white h-[60vh] w-[50vw]  flex flex-col justify-center items-center rounded-2xl px-4 text-center">
            <div className="max-h-[20vh]">
              <img src="images/Ingenierie-logicielle_Plan-de-travail-1-1-150x150.png" alt="" />
            </div>
            <p className="font-garamond text-[var(--secondary)] text-2xl  h-[10vh] flex items-center text-center">Ingénierie logicielle</p>
            <p className="text-[var(--primary)] h-[25vh] ">Apprenez les principes de la conception ou le développement de programmes et d’applications web et mobile et explorez le monde fascinant des “codes”. A la fin de votre formation, vous serez aptes à proposer des solutions pratiques, créatives et innovantes à des particuliers ou des entreprises pour leurs besoins numériques.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Domaine;