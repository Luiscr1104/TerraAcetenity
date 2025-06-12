import { cn } from "@/lib/utils";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

export function BentoGridTerceroDemo() {
  return (
    <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={item.className}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  );
}

const items = [
    {
      title: "Casa Colonial",
      description: "Casa moderna con piscina, 4 habitaciones y 3 baños. Zona exclusiva.",
      header: (
        <div className="relative w-full h-full overflow-hidden rounded-xl">
          <img
            src="/images/colonial.webp"
            alt="Casa de lujo en San José"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      ),
      className: "md:col-span-2",
      icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Condominio Verde en La Fortuna",
      description: "Condominio ecológico con seguridad y acceso a senderos naturales.",
      header: (
        <div className="relative w-full h-full overflow-hidden rounded-xl">
          <img
            src="/images/garden.webp"
            alt="Condominio verde en La Fortuna"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      ),
      className: "md:col-span-1",
      icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Lote Bosque en Guanacaste",
      description: "Lote amplio rodeado de naturaleza. Perfecto para desarrollar un proyecto sostenible.",
      header: (
        <div className="relative w-full h-full overflow-hidden rounded-xl">
          <img
            src="/images/colonial.webp"
            alt="Lote bosque en Guanacaste"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      ),
      className: "md:col-span-1",
      icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Terreno Montaña en Heredia",
      description: "Terreno con vistas espectaculares y clima fresco todo el año.",
      header: (
        <div className="relative w-full h-full overflow-hidden rounded-xl">
          <img
            src="/images/colonial/IMG_6286.JPEG"
            alt="Terreno en montaña de Heredia"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      ),
      className: "md:col-span-2",
      icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    },                                                                                                        
  ];
  
