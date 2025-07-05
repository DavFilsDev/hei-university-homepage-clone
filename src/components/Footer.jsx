import { FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[var(--primary)] text-gray-300 pt-8">
      <div className='max-w-5xl mx-auto'>
        <img className='w-24' src="images/logo.png" alt="" />
      </div>

      <div className="mx-auto px-5 flex justify-between max-w-5xl">
        {/* Logo + Description */}
        <div className='w-36'>
          <p className="text-sm">
            Formation habilitée par l’État suivant le système LMD
          </p>
          <p className="text-sm mt-2">
            Habilitation MESupRes n°31309/2023
          </p>
        </div>

        {/* Address */}
        <div>
          <h4 className="text-white font-bold mb-2">Adresse</h4>
          <p className="text-sm">II J 161 R Ambodivoanjo</p>
          <p className="text-sm">Ivandry Antananarivo</p>
          <p className="text-sm">101, Madagascar</p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-white font-bold mb-2">Navigation</h4>
          <ul className="space-y-1">
            <li><a href="#" className="text-[var(--secondary)] hover:underline">Accueil</a></li>
            <li><a href="#" className="hover:text-white">Actualités</a></li>
            <li><a href="#" className="hover:text-white">Bourse d’études</a></li>
            <li><a href="#" className="hover:text-white">Inscription</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-white font-bold mb-2">Médias sociaux</h4>
          <div className="flex space-x-3 mt-2">
            <div className="bg-[var(--secondary)] rounded-full p-3">
              <a href="#">
                <FaFacebookF className="text-white" />
              </a>
            </div>
            <div className="bg-[var(--secondary)] rounded-full p-3">
              <a href="#">
                <FaLinkedinIn className="text-white" />
              </a>
            </div>
            <div className="bg-[var(--secondary)] rounded-full p-3">
              <a href="#">
                <FaInstagram className="text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-gray-400 text-sm py-1 bg-white">
        &copy; HEI Madagascar
      </div>
    </footer>
  );
}
