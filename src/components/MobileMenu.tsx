import Container from "./Container";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

function MobileMenu({ isOpen, onClose }: Props) {
  return (
    <div
      className={`md:hidden block fixed z-[100] top-0 left-0 w-full h-full bg-[#010A05BF]/[0.75] backdrop-blur-xl transition-all duration-500 ease-in-out ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <Container>
        <button className={`md:hidden`} type="button" onClick={onClose}>
          CLOSE
        </button>
      </Container>
    </div>
  );
}

export default MobileMenu;
