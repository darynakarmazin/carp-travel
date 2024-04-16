import Link from "next/link";
import Container from "../Container/Container";
import Navbar from "../Navbar";

function Header() {
  return (
    <header className="py-6">
      <Container>
        <nav className="flex justify-between">
          <Link href="/" aria-label="logo-carp-travel">
            logo
          </Link>
          <Navbar />
        </nav>
      </Container>
    </header>
  );
}

export default Header;
