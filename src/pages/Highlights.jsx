import salad from '../assets/greek salad.jpg';
import bruchetta from '../assets/bruchetta.svg';
import lemmon from '../assets/lemon dessert.jpg';

import moto from '../assets/motorcycle-solid.svg';
import { Link } from 'react-router-dom';

function Highlights() {
  return (
    <section className="padding-container lg:py-20 ">
      <div className="flex items-center lg:gap-20 gap-0">
        <h1 className="font-title lg:regular-64 text-[30px]">
          This weeks specials!
        </h1>
        <Link to='/menu' className="flexCenter font-semibold font-content rounded-[16px] bg-yellow-20 w-[201px] h-[54px] border-yellow-20 hover:text-orange-40 ml-28">
          Online Menu
        </Link>
      </div>
      <div className="flex">
        <ul className="gap-6 mt-20 flex lg:flex-row flex-col">
          <li
            className="bg-white-20 
            w-[276px] h-[490px] rounde-t-[16px] 
            shadow-sm hover:shadow-xl 
            transition-shadow duration-150"
          >
            <img
              src={salad}
              alt="salad"
              className=""
              width={276}
              height={208}
            />
            <div className="p-4 mt-4 gap-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-title medium-20">Greek salad</h3>
                <h3 className="text-orange-40">$12.99</h3>
              </div>
              <p className="regular-16">
                A vibrant and refreshing dish featuring a mix of crisp
                cucumbers, ripe tomatoes, red onions, and tangy Kalamata olives.
              </p>
              <div className="flex items-center mt-20">
                <h3 className="regular-16 font-semibold">Order a delvery</h3>
                <img
                  src={moto}
                  alt="icon-moto"
                  className="ml-2"
                  width={25}
                  height={25}
                />
              </div>
            </div>
          </li>
          <li
            className="bg-white-20 
            w-[276px] h-[490px] rounde-t-[16px] 
            shadow-sm hover:shadow-xl 
            transition-shadow duration-150"
          >
            <img
              src={bruchetta}
              alt="bruchetta"
              className=""
              width={276}
              height={208}
            />
            <div className="p-4 mt-4 gap-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-title medium-20">Bruchetta</h3>
                <h3 className="text-orange-40">$5.0</h3>
              </div>
              <p className="regular-16">
                Crispy toasted slices of rustic Italian bread topped with a
                fresh mix of diced ripe tomatoes, garlic, and fragrant basil.
              </p>
              <div className="flex items-center mt-20">
                <h3 className="regular-16 font-semibold">Order a delvery</h3>
                <img
                  src={moto}
                  alt="icon-moto"
                  className="ml-2"
                  width={25}
                  height={25}
                />
              </div>
            </div>
          </li>
          <li
            className="bg-white-20 
            w-[276px] h-[490px] rounde-t-[16px] 
            shadow-sm hover:shadow-xl 
            transition-shadow duration-150"
          >
            <img
              src={lemmon}
              alt="lemmon"
              className="h-[183px]"
              width={276}
              
            />
            <div className="p-4 mt-4 gap-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-title medium-20">Lemon dessert</h3>
                <h3 className="text-orange-40">$5.0</h3>
              </div>
              <p className="regular-16">
                A refreshing and tangy lemon dessert with layers of velvety
                lemon cream and a buttery graham cracker crust.
              </p>
              <div className="flex items-center mt-20">
                <h3 className="regular-16 font-semibold">Order a delvery</h3>
                <img
                  src={moto}
                  alt="icon-moto"
                  className="ml-2"
                  width={25}
                  height={25}
                />
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Highlights;
