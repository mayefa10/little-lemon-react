import image1 from '../assets/Mario and Adrian A.jpg'
import image2 from '../assets/restaurant chef B.jpg';


function About() {
  return (
    <section className="padding-container mt-20 mb-44">
      <div className="flexBetween lg:flex-row flex-col">
        <div className="w-[372px] h-[172px] mb-20">
          <h1 className="font-title regular-64">Little Lemon</h1>
          <h3 className="font-title regular-40">Chicago</h3>
          <p className="font-content regular-16">
            Located in the heart of downtown Chicago, The Windy Fork offers a
            unique fusion of modern American cuisine with a touch of global
            influences. Nestled near the iconic Millennium Park, this chic and
            cozy restaurant brings together the vibrant flavors of the city and
            the warmth of a neighborhood favorite.
          </p>
        </div>
        <div className="flexEnd ">
          <div className="relative">
            <img
              src={image1}
              alt="image-1"
              className="mt-20 mr-48"
              width={'248px'}
              height={'290px'}
            />
          </div>
          <div className="absolute">
            <img
              src={image2}
              alt="image-2"
              className="mb-14"
              width={'248px'}
              height={'290px'}
            />
          </div>
        </div>
    
      </div>
    </section>
  );
}

export default About