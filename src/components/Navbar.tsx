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
            className="text-[14px] tracking-[1.4px] leading-tight no-underline hover:cursor-pointer link"
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
