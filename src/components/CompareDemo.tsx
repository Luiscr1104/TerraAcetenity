import { Compare } from "@/components/ui/compare";

export function CompareDemo() {
  return (
    <div className="my-20 py-16 px-4">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-6 text-green-900">
        ¿Ciudad o naturaleza?
      </h2>
      <p className="text-center text-base md:text-lg text-neutral-600 max-w-2xl mx-auto mb-12">
        Salí del ruido, el estrés y la prisa. Descubrí el otro lado de la vida: tranquilidad, aire puro y un futuro más sereno para vos y tu familia. Compará y sentí la diferencia.
      </p>

      <div className="mx-auto max-w-4xl border rounded-3xl dark:bg-neutral-900 bg-neutral-100 border-neutral-200 dark:border-neutral-800 overflow-hidden">
        <Compare
          firstImage="/images/imagen1.jpg" // Ciudad
          secondImage="/images/imagen2.webp" // Naturaleza
          firstImageClassName="object-cover w-full h-full"
          secondImageClassname="object-cover w-full h-full"
          className="w-full h-[250px] md:h-[400px]"
          slideMode="hover"
        />
      </div>
    </div>
  );
}
