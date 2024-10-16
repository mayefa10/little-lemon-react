import { Link } from 'react-router-dom';
import logo from '../assets/Logo .svg';
import { useState } from 'react';
import menuHamburger from '../assets/🦆 hamburger_ menu.svg';
import close from '../assets/x.svg';



const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="relative">
        <nav className="flexCenter p-4 m-2 ">
          <div className="flex items-center">
            <Link to="/">
              <img
                src={logo}
                alt="logo"
                className="mr-20"
                width={180}
                height={180}
              />
            </Link>
            {/*Mobile hamburger Icon*/}
            <div className="md:hidden px-4">
              <button onClick={toggleMenu} className="focus:outline-none">
                <img src={menuHamburger} alt="menu_hamburger" className="" />
              </button>
            </div>

            {/* Desktop menu*/}
            <div className="hidden md:flex">
              <ul className="flex gap-8 mx-10">
                <li className="hover:text-[#EE9972]">
                  <Link to="/">Home</Link>
                </li>
                <li className="hover:text-[#EE9972]">
                  <Link to="/about">About</Link>
                </li>
                <li className="hover:text-[#EE9972]">
                  <Link to="/menu">Menu</Link>
                </li>
                <li className="hover:text-[#EE9972]">
                  <Link to="/reservations">Reservations</Link>
                </li>
                <li className="hover:text-[#EE9972]">
                  <Link to="/specials">Order online</Link>
                </li>
                <li className="hover:text-[#EE9972]">
                  <Link to="/login">Login</Link>
                </li>
              </ul>
            </div>
          </div>
         
        </nav>
      </div>
      {isOpen && (
        <div className="fixed inset-0 opacity-50 z-40" onClick={toggleMenu} />
      )}
      <div
        className={`fixed top-0 right-0 h-full w-2/4 bg-[#333333] text-[#EDEFEE] shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button onClick={toggleMenu} className="focus:outline-none">
          <img src={close} alt="close" className="m-2" width={15} height={15} />
        </button>

        {/* Menu Links */}
        <ul className="flex-col items-start space-y-8 pt-8 pl-8">
          <li className=" hover:text-[#FBDABB]">
            <Link to="/">Home</Link>
          </li>
          <li className=" hover:text-[#FBDABB]">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:text-[#FBDABB]">
            <Link to="/menu">Menu</Link>
          </li>
          <li className="hover:text-[#FBDABB]">
            <Link to="/reservations">Reservations</Link>
          </li>
          <li className="hover:text-[#FBDABB]">
            <Link to="/specials">Order online</Link>
          </li>
          <li className="hover:text-[#FBDABB]">
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Nav;
