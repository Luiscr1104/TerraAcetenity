import { ParallaxScrollSecond } from "./ui/parallax-scroll-2";
import SectionHeading from "@/components/SectionHeading";

export function ParallaxScrollSecondDemo() {
  return (
    <div className="mt-20 py-4 px-4">
      <SectionHeading
        badge="Galería"
        title="Explorá nuestros"
        highlight="proyectos"
        subtitle="Cada imagen cuenta una historia. Descubrí la belleza natural de nuestros terrenos y las oportunidades únicas que Terra Real Estate CR tiene para vos en La Fortuna y otras zonas de alto crecimiento."
      />

      <ParallaxScrollSecond images={images} />
    </div>
  );
}

const images = [
  "/images/colonial/IMG_6286.JPEG",
  "/images/colonial/IMG_6307.JPEG",
  "/images/colonial/IMG_6314.JPEG",
  "/images/colonial/IMG_6315.JPEG",
  "/images/colonial/IMG_6316.JPEG",
  "/images/colonial/IMG_6317.JPEG",
  "/images/colonial/IMG_6318.JPEG",
  "/images/colonial/IMG_6319.JPEG",
  "/images/colonial/IMG_6320.JPEG",
  "/images/colonial/IMG_6321.JPEG",
  "/images/colonial/IMG_6322.JPEG",
  "/images/colonial/IMG_6324.JPEG",
  "/images/colonial/IMG_6325.JPEG",
  "/images/colonial/e0684715-2613-4bc7-ac26-9fc0271b7b52.JPG",
];
