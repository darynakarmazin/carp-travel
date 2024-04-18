interface Props {
  isOpen: boolean;
  onClose: () => void;
}

function MobileMenu({ isOpen, onClose }: Props) {
  return <div className={`md:hidden`}></div>;
}

export default MobileMenu;
