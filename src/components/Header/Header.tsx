import Image from "next/image";
import Link from "next/link";
import Container from "../Container";
import Navbar from "../Navbar";

function Header() {
  return (
    <header className="absolute w-full top-0 left-0 py-6">
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
        </nav>
      </Container>
    </header>
  );
}

export default Header;
