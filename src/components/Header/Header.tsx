"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import Container from "../Container";
import Navbar from "../Navbar";
import MobileMenu from "../MobileMenu";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const openMobileMenu = () => {
    setIsMobileMenuOpen(true);
  };

  return (
    <>
      <header className="header-section absolute w-full top-0 left-0 py-9 xl:py-6">
        <Container>
          <nav className="flex justify-between items-center">
            <Link href="/" aria-label="logo-carp-travel">
              <Image
                src="/logo.svg"
                width={61}
                height={34}
                style={{ width: "61px", height: "33px" }}
                alt="Logo CarpTravel company"
              />
            </Link>
            <Navbar />
            <button
              className={`md:hidden`}
              type="button"
              onClick={openMobileMenu}
            >
              MENU
            </button>
          </nav>
        </Container>
      </header>
      <MobileMenu
        isOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
    </>
  );
}

export default Header;
