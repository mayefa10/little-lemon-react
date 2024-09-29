function Footer() {
  return (
    <div className="flex justify-center
     gap-10">
      <section>
        <ul className="">
          <h3 className="font-semibold">Dormat navigation</h3>
          <li>Home</li>
          <li>About</li>
          <li>Menu</li>
          <li>Reservations</li>
          <li>Order Online</li>
          <li>LOgin</li>
        </ul>
      </section>
      <sectio>
        <ul className="">
          <h3 className="font-semibold">Contact</h3>
          <li>Adress</li>
          <li>Phone number</li>
          <li>Email</li>
        </ul>
      </sectio>
      <section>
        <ul className="">
          <h3 className="font-semibold">Social media links</h3>
          <li>Facebook</li>
          <li>Instagram</li>
          <li>X</li>
        </ul>
      </section>
    </div>
  );
}

export default Footer;
