const Header = () => {

    return (
      <nav className="bg-[var(--primary)]  w-[100vw] h-[10vh] top-0 fixed z-100">
        <div className=" mx-auto px-4 py-0 flex justify-between items-center">
          <div className=" w-[50vw] flex justify-center items-center ">
            <img className='w-24' src="images/logo.png" alt="" />
          </div>

          <div className="hidden md:flex w-[60vw] space-x-6 justify-start items-center  font-bold text-[16px] text-white">
            <a href="#" > <span className='text-[var(--secondary)] font-bbold'>ACCUEIL</span></a>
            <a href="#" > <span className='text-white font-bbold'>ACTUALITÉS</span></a>
            <a href="#" ><span className='text-white font-bbold'>BOURSE D’ÉTUDES</span></a>
            <a href="#" ><span className='text-white font-bbold'>INSCRIPTION</span></a>
            <a href="#" className="bg-[var(--secondary)] text-white font-bold px-4 py-2 rounded hover:bg-[var(--secondary)] transition">
              <span className='text-white font-bbold'>  INTRANET</span>
            </a>
          </div>
        </div> 
      </nav>
    );
};

export default Header;