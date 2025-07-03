import { FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#001948] text-gray-300 pt-10">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo + Description */}
        <div>
          <div className="text-yellow-400 text-3xl font-bold mb-4">HEI</div>
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
            <li><a href="#" className="text-yellow-400 hover:underline">Accueil</a></li>
            <li><a href="#" className="hover:text-white">Actualités</a></li>
            <li><a href="#" className="hover:text-white">Bourse d’études</a></li>
            <li><a href="#" className="hover:text-white">Inscription</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-white font-bold mb-2">Médias sociaux</h4>
          <div className="flex space-x-3 mt-2">
            <a href="#" className="bg-yellow-400 text-[#001948] rounded-full p-2 hover:bg-yellow-500 transition">
              <FaFacebookF />
            </a>
            <a href="#" className="bg-yellow-400 text-[#001948] rounded-full p-2 hover:bg-yellow-500 transition">
              <FaLinkedinIn />
            </a>
            <a href="#" className="bg-yellow-400 text-[#001948] rounded-full p-2 hover:bg-yellow-500 transition">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-400 text-sm py-2 bg-white">
        &copy; HEI Madagascar
      </div>
    </footer>
  );
}
