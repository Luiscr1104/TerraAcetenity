import { Compare } from "@/components/ui/compare";
import SectionHeading from "@/components/SectionHeading";

export function CompareDemo() {
  return (
    <div className="my-20 py-16 px-4">
      <SectionHeading
        badge="Comparación"
        title="¿Ciudad o"
        highlight="naturaleza?"
        subtitle="Salí del ruido, el estrés y la prisa. Descubrí el otro lado de la vida: tranquilidad, aire puro y un futuro más sereno para vos y tu familia. Compará y sentí la diferencia."
      />

      <div className="mx-auto max-w-4xl border rounded-3xl dark:bg-neutral-900 bg-neutral-100 border-neutral-200 dark:border-neutral-800 overflow-hidden">
        <Compare
          firstImage="/images/imagen1.jpg"
          secondImage="/images/imagen2.webp"
          firstImageClassName="object-cover w-full h-full"
          secondImageClassname="object-cover w-full h-full"
          className="w-full h-[250px] md:h-[400px]"
          slideMode="hover"
        />
      </div>
    </div>
  );
}
