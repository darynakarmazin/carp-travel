"use client";

import { Link } from "react-scroll";

interface JoinButtonProps {
  buttonText: string;
}

function JoinButton({ buttonText }: JoinButtonProps) {
  return (
    <Link
      className={`${"join-btn"} flex justify-center w-full py-4 px-14 bg-white bg-opacity-10 text-[32px] leading-tight font-bold hover:bg-opacity-20 focus:bg-opacity-20`}
      to="contacts"
      spy={true}
      smooth={true}
      duration={1500}
      href="/"
    >
      {buttonText}
    </Link>
  );
}

export default JoinButton;
