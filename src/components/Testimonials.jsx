import person1 from '../assets/person-4.png'
import person2 from '../assets/person-2.png';
import person3 from '../assets/person-3.png';
import person4 from '../assets/person-1.png';
import starts from '../assets/start.png';


function Testimonials() {
  return (
    <section className="padding-container bg-gray-60">
      <div className="my-10 p-8">
        <h1 className="font-title text-center regular-64 font-semibold text-yellow-20">
          Testimonials
        </h1>
        <div className="">
          <ul className="text-content flex lg:flex-row  flex-col gap-4 my-10">
            <li className="bg-white-20 w-[200px] h-[300px] p-4">
              <h3 className="mb-2 font-bold text-[16px]">Rating</h3>
              <div className="flex items-center gap-2">
                <img src={person1} alt="person-1" className="" />
                <h2 className="font-semibold">Samy Toreto</h2>
              </div>
              <div className="flex gap-1 mt-2">
                <img
                  src={starts}
                  alt="starts"
                  className=""
                  width={10}
                  height={10}
                />
                <img
                  src={starts}
                  alt="starts"
                  className=""
                  width={10}
                  height={10}
                />
                <img
                  src={starts}
                  alt="starts"
                  className=""
                  width={10}
                  height={10}
                />
              </div>
              <p className="mt-4 px-2">
                Amazing service! Maria was attentive, friendly, and made our
                dinner truly special. Highly recommend!
              </p>
            </li>
            <li className="bg-white-20 w-[200px] h-[300px] p-6">
              <h3 className="mb-2 font-bold text-[16px]">Rating</h3>
              <div className="flex items-center gap-2">
                <img src={person3} alt="person-3" className="" />
                <h2 className="font-semibold">Lisa Maquiver</h2>
              </div>
              <div className="flex gap-1 mt-2">
                <img
                  src={starts}
                  alt="starts"
                  className=""
                  width={10}
                  height={10}
                />
                <img
                  src={starts}
                  alt="starts"
                  className=""
                  width={10}
                  height={10}
                />
                <img
                  src={starts}
                  alt="starts"
                  className=""
                  width={10}
                  height={10}
                />
              </div>
              <p className="mt-4 px-2">
                Sofia is a gem! She was so welcoming and made us feel at home.
                Best dining experience thanks to her.
              </p>
            </li>

            <li className="bg-white-20 w-[200px] h-[300px] p-4">
              <h3 className="mb-2 font-bold text-[16px]">Rating</h3>
              <div className="flex items-center gap-2">
                <img src={person2} alt="person-2" className="" />
                <h2 className="font-semibold">Jhon Anderson</h2>
              </div>
              <div className="flex gap-1 mt-2">
                <img
                  src={starts}
                  alt="starts"
                  className=""
                  width={10}
                  height={10}
                />
                <img
                  src={starts}
                  alt="starts"
                  className=""
                  width={10}
                  height={10}
                />
                <img
                  src={starts}
                  alt="starts"
                  className=""
                  width={10}
                  height={10}
                />
              </div>
              <p className="mt-4 px-2">
                Amazing service! Maria was attentive, friendly, and made our
                dinner truly special. Highly recommend!
              </p>
            </li>
            <li className="bg-white-20 w-[200px] h-[300px] p-4">
              <h3 className="mb-2 font-bold text-[16px]">Rating</h3>
              <div className="flex items-center gap-2">
                <img src={person4} alt="person-4" className="" />
                <h2 className="font-semibold">Michael Bush</h2>
              </div>
              <div className="flex gap-1 mt-2">
                <img
                  src={starts}
                  alt="starts"
                  className=""
                  width={10}
                  height={10}
                />
                <img
                  src={starts}
                  alt="starts"
                  className=""
                  width={10}
                  height={10}
                />
                <img
                  src={starts}
                  alt="starts"
                  className=""
                  width={10}
                  height={10}
                />
              </div>
              <p className="mt-4 px-2">
                Mark went above and beyond! His attention to detail and
                enthusiasm made our night unforgettable.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Testimonials