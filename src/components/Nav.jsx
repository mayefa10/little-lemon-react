import { Link } from 'react-router-dom';
import logo from '../assets/Logo .svg';

function Nav() {
  return (
    <nav className="flex justify-center p-6 m-8">
      <div className="flex items-center">
        <img src={logo} alt="logo" className="mr-20"/>

        <ul className="flex gap-4 mx-10 font-bold">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/menu">Menu</Link>
          </li>
          <li>
            <Link to="/reservations">Reservations</Link>
          </li>
          <li>
            <Link to="/order">Order online</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
