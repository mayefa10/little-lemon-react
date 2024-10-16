import menu0 from '../assets/Restaurant Menu1.png'
import menu1 from '../assets/Restaurant Menu2.png';
import menu2 from '../assets/Restaurant Menu3.png';
import menu3 from '../assets/Restaurant Menu4.png';


function Menu() {
  return (
    <div className="flexBetween gap-4 m-6 p-2 flex-col lg:flex-row">
      <img
        src={menu0}
        alt="menu"
        className="shadow hover:shadow-xl"
        width={250}
        height={250}
      />
      <img
        src={menu1}
        alt="menu"
        className="shadow hover:shadow-xl"
        width={250}
        height={250}
      />
      <img
        src={menu2}
        alt="menu"
        className="shadow hover:shadow-xl"
        width={250}
        height={250}
      />
      <img
        src={menu3}
        alt="menu"
        className="shadow hover:shadow-xl"
        width={250}
        height={250}
      />
    </div>
  );
}

export default Menu