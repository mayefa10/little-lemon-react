import specials from '../assets/specials-menu.png'

const Specials = () => {
  return (
    <div className="flexCenter">
      <h1 className="font-title text-yellow-20 font-bold">Speciasl Menu</h1>
      <img
        src={specials}
        alt="specialsMenu"
        className="rounded-full"
        width={500}
        height={500}
      />
    </div>
  );
}

export default Specials