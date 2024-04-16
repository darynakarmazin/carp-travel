"use client";

import { Link } from "react-scroll";

function Navbar() {
  return (
    <ul className="flex md:gap-6 xl:gap-14 max-md:hidden">
      <li>
        <Link to="#about">About</Link>
      </li>
      <li>
        <Link to="#services">Services</Link>
      </li>
      <li>
        <Link to="#career">Career</Link>
      </li>
      <li>
        <Link to="#gallery">Gallery</Link>
      </li>
      <li>
        <Link to="#contacts">Contacts</Link>
      </li>
    </ul>
  );
}

export default Navbar;
