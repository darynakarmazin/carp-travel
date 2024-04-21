import Image from "next/image";
import Container from "../Container";
import galleryData from "../../data/gallery.json";
import GallerySlider from "../GallerySlider";
const { title, slides } = galleryData;

function Gallery() {
  return (
    <section id="gallery" className="gallery-section py-20">
      <Container>
        <h2 className="text-[40px] md:text-[67px] xl:text-[98px] leading-snug md:leading-tight font-medium tracking-[-0.064em] mb-6 md:mb-[72px] xl:mb-6">
          <span className="font-thin">{title[0]}</span>
          {title[1]}
        </h2>
        <ul className="md:hidden flex flex-col gap-6">
          {slides.map((slide, index) => {
            return (
              <li key={index}>
                <Image
                  src={slide.image}
                  width={438}
                  height={310}
                  alt="Picture of nature"
                />
              </li>
            );
          })}
        </ul>
        <GallerySlider />
      </Container>
    </section>
  );
}

export default Gallery;
