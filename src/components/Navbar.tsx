"use client";

import { Link } from "react-scroll";
import menu from "../data/navbar.json";

const duration = 400;

function Navbar() {
  return (
    <ul className="flex md:gap-6 xl:gap-14 max-md:hidden">
      {menu.map(({ id, src, text }, index) => (
        <li key={id}>
          <Link
            className="text-[14px] leading-tight no-underline hover:cursor-pointer link py-[4spx] hover:underline focus:underline transition-all duration-500 ease-in-out"
            to={src}
            spy={true}
            smooth={true}
            duration={duration * (index + 1)}
            href="/"
          >
            {text}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default Navbar;
