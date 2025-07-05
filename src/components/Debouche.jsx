const Deboucher = () => {
 

  return (
  <>
  <div className='flex flex-row  m-auto  text-[var(--primary)] justify-center items-center py-[4rem]'>
    <div className='flex flex-col gap-y-5 w-[30vw] h-[35vh] '>
        <h2 className='font-garamond text-[40px] font-extrabold'>Quelques débouchés</h2>
        <p >
            Formez-vous à une panoplie de métiers du numérique avec nous et venez acquérir les fondements de la programmation (qui vous servira pour les différents métiers) ! Ce sont des métiers porteurs, des métiers du présent, des métiers du futur…
        </p>
        <p>
            Développeur back end, développeur front end, développeurs mobile, chefs de projet, exploitants cloud, analystes cybersécurité, pentesters, auditeur technique SSI, auditeur organisationnel SSI, administrateur système et réseau, développeur de sécurité…
        </p>
    </div>
    <div>
        <img  className="w-[25vw]" src="images/IMG-02-e1720543344824-987x1024-1.webp" alt="hei-student" />
    </div>
  </div>
  </>
  );
};
export default Deboucher;