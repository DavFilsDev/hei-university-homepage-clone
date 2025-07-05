import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
 faGraduationCap,
 faMedal,
 faUsers

} from "@fortawesome/free-solid-svg-icons";

const Apropos = () => {
  return (
    <>
        <div className='flex flex-row-reverse  m-auto w-full  gap-[5rem] bg-white text-[#001948] justify-center items-center py-[10rem]'>
            <div className='flex flex-col gap-y-10 w-[27vw] h-[80vh] '>
                <h2 className='font-garamond text-[40px] font-extrabold'> À propos de nous</h2>
                <div className='flex flex-col gap-y-7'>
                    <div className='flex-row justify-center items-center'>
                                
                        <p className='text-3xl font-bold'> <span className='text-5xl text-[#fcaf3b]'> <FontAwesomeIcon icon={faGraduationCap} /></span>      +3ans</p>
                    </div>
                    <p className='text-[17px]'>Depuis 3 ans, nous formons ceux qui décodent le futur, aux métiers de l’informatique. Nous sommes un groupe d’experts, de professionnels et des passionnés de l’informatique de Madagascar et du monde entier.</p>
                </div>
                <div className='flex flex-col gap-y-7'>
                    <div className='flex-row justify-center items-center'>
                        <p className='text-3xl font-bold'> <span className='text-5xl text-[#fcaf3b]'> <FontAwesomeIcon icon={faUsers} /></span>      +250 étudiants</p>
                    </div>
                    <p  className='text-[17px]'>Plus de 250 étudiants et plus d’une dizaine d’entreprises ont déjà fait confiance à notre formation habilitée par l’État malgache. Avec eux tous, nous sommes fiers de pouvoir parler de la “grande famille HEI”.</p>
                </div>
                <div className='flex flex-col gap-y-7'>
                    <div className='flex-row justify-center items-center'>
                         <p className='text-3xl font-bold'> <span className='text-5xl text-[#fcaf3b]'> <FontAwesomeIcon icon={faMedal} /></span>       Notre mission</p>
                    </div>
                    <p  className='text-[17px]'>
                        Notre mission est d’amener des jeunes malgaches sur des domaines porteurs comme l’intelligence artificielle, la cybersécurité ou la programmation afin de favoriser leur employabilité et le développement de Madagascar.
                    </p>
                </div>
            </div>
            <div>
                <img  className="w-[29vw]" src="images/A-propos-left-1.webp" alt="" />
            </div>
        </div>
    </>
  );
};

export default Apropos;