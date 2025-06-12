import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "Desde el primer contacto, el equipo fue muy profesional y transparente. Hoy tengo mi lote cerca del Volcán Arenal y estoy más que feliz con la inversión.",
      name: "Laura González",
      designation: "Compradora de terreno en La Fortuna",
      src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
      quote:
        "La asesoría fue impecable, siempre atentos a nuestras dudas. Recomendados al 100%, incluso ya referí a un amigo.",
      name: "Isabel Duarte",
      designation: "Compradora primeriza",
      src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
      quote:
        "Mi familia y yo buscábamos un lugar para desconectarnos los fines de semana. Terra nos ayudó a encontrar el lote ideal rodeado de naturaleza.",
      name: "Carlos Méndez",
      designation: "Inversionista familiar",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
      quote:
        "Conseguí un lote amplio, con buena ubicación y excelente precio. En pocos años valdrá mucho más, y eso me da tranquilidad.",
      name: "José Ramírez",
      designation: "Inversionista nacional",
      src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
      quote:
        "El proceso fue rápido, claro y sin letra pequeña. Es raro encontrar tanta claridad en bienes raíces hoy en día.",
      name: "Andrea Salas",
      designation: "Cliente satisfecha",
      src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
  ];

  return (
    <div className="my-20 px-4">
      <h2 className="text-3xl md:text-5xl font-bold text-center text-green-900">
        Lo que dicen nuestros clientes
      </h2>
      <p className="text-center text-base md:text-lg text-neutral-600 max-w-2xl mx-auto mb-12">
        En Terra Real Estate CR no solo vendemos terrenos, construimos confianza. Estos testimonios reflejan la experiencia de quienes han cumplido su sueño de invertir en La Fortuna de San Carlos con nuestro apoyo.
      </p>
      <AnimatedTestimonials testimonials={testimonials} />
    </div>
  );
}
