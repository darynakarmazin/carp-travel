import Container from "./Container";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

function MobileMenu({ isOpen, onClose }: Props) {
  return (
    <div
      className={`md:hidden ${
        isOpen
          ? "block fixed z-[100] top-0 left-0 w-full h-full bg-[rgba(1, 10, 5, 0.75)] backdrop-blur-xl"
          : "hidden"
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
