import { Link } from 'react-router-dom';
import restaurant from '../assets/restauranfood.jpg';


function Hero() {
  return (
    <>
      <section className="flexBetween w-full bg-gray-60">
        <div className="flex-col flexCenter lg:flex-row lg:gap-0 gap-8 lg:my-10 my-8 xl:px-44 px-10">
          <div className="">
            <h1 className="font-title sm:regular-64 regular-40 text-yellow-20">
              Little Lemon
            </h1>
            <h2 className="font-title md:regular-40 text-[28px] text-[#EDEFEE]">
              Chicago
            </h2>
            <p className="text-[#EDEFEE] font-content text-left w-full lg:w-[420px] ">
              Nestled in the heart of Chicago, Little Lemon offers a vibrant and
              refreshing dining experience inspired by the flavors of the
              Mediterranean. From zesty lemon-infused dishes to warm, sun-kissed
              spices, every plate is a celebration of freshness and
              authenticity.
            </p>

            <Link
              role="button"
              className="flexCenter font-semibold font-content rounded-[16px] bg-yellow-20 mt-4 w-[201px] h-[41px] border-yellow-20 hover:text-orange-40"
              to="/reservations"
              target="_blank"
            >
              Reserve a table
            </Link>
          </div>

          <img
            src={restaurant}
            alt="restaurant"
            width={430}
            height={460}
            className="restaurant-hero rounded-3xl lg:mr-40 lg:mt-16 sm:mr-0 sm:mt-2"
          />
        </div>
      </section>
    </>
  );
}

export default Hero;
