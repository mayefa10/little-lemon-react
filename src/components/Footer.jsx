import { Link } from 'react-router-dom';
import icon from '../assets/Logo .svg'


function Footer() {
  return (
    <section className="gap-10 padding-container bg-gray-70 text-white-20 flexCenter  w-full h-[473px]">
      <div className="flex gap-20 lg:flex-row flex-col-2">
        <div className="w-[158px] h-[252px] bg-white-20 lg:flex items-center absolute lg:relative hidden">
          <hr className="bg-gray-70 w-20 h-8" />
          <img src={icon} alt="logo" className="" />
          <hr className="bg-gray-70 w-20 h-8" />
        </div>
        <ul className="">
          <h3 className="font-content font-extrabold text-yellow-20">
            Dormat navigation
          </h3>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/menu">
            <li >Menu</li>
          </Link>
          <Link to="/reservations">
            <li>Reservations</li>
          </Link>
          <Link>
            <li to='/'>Order Online</li>
          </Link>
          <Link to='/login'>
            <li>Login</li>
          </Link>
        </ul>

        <ul className="">
          <h3 className="font-content font-extrabold text-yellow-20">
            Contact
          </h3>
          <li>Adress</li>
          <li>Phone number</li>
          <li>Email</li>
        </ul>

        <ul className="">
          <h3 className="font-content font-extrabold text-yellow-20">
            Social media links
          </h3>
          <li>Facebook</li>
          <li>Instagram</li>
          <li>X</li>
        </ul>
      </div>
    </section>
  );
}

export default Footer;
