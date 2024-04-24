"use client";

import { Link } from "react-scroll";
import Container from "./Container";
import menu from "../data/navbar.json";
import { useEffect } from "react";

const duration = 100;

interface Props {
  isOpen: boolean;
  setIsMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function MobileMenu({ isOpen, setIsMobileMenuOpen }: Props) {
  useEffect(() => {
    isOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }, [isOpen]);

  const handleModalClose = () => {
    setIsMobileMenuOpen(false);
  };
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div
      className={`md:hidden block fixed z-[100] top-0 left-0 w-full py-9 h-full bg-[#010A05BF]/[0.75] backdrop-blur-xl transition-all duration-500 ease-in-out ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <Container>
        <div className="flex items-center justify-end">
          <button
            className="py-[3.5px] z-10"
            type="button"
            onClick={handleModalClose}
          >
            CLOSE
          </button>
        </div>
        <ul className="flex flex-col gap-6 items-center justify-center absolute top-0 left-0 right-0 bottom-0">
          {menu.map(({ id, src, text }, index) => (
            <li key={id}>
              <Link
                className="text-[18px] leading-tight no-underline hover:cursor-pointer link py-[4px] hover:underline focus:underline transition-all duration-500 ease-in-out"
                to={src}
                spy={true}
                smooth={true}
                duration={duration * (index + 1)}
                href="/"
                onClick={handleLinkClick}
              >
                {text}
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
}

export default MobileMenu;
