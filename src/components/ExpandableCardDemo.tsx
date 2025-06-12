"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/hooks/use-outside-click";

export function ExpandableCardDemo() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <img
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-medium text-neutral-700 dark:text-neutral-200 text-base"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400 text-base"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.a
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    href={active.ctaLink}
                    target="_blank"
                    className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white"
                  >
                    {active.ctaText}
                  </motion.a>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <div className="px-4 py-12 text-center max-w-3xl mx-auto">
      <h2 className="text-3xl md:text-5xl font-bold text-green-900 mb-4">
        Terrenos destacados
      </h2>
      <p className="text-neutral-600 md:text-lg">
        Descubrí algunas de las propiedades más atractivas en La Fortuna de San Carlos. Ya sea para vivir, invertir o vacacionar, cada terreno tiene algo único que ofrecerte.
      </p>
      </div>
      <ul className="max-w-2xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 items-start gap-4">
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={card.title}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col  hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-col  w-full">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <img
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className="h-60 w-full  rounded-lg object-cover object-top"
                />
              </motion.div>
              <div className="flex justify-center items-center flex-col">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left text-base"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-neutral-600 dark:text-neutral-400 text-center md:text-left text-base"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description: "Terreno residencial",
    title: "Lote en La Fortuna",
    src: "/images/colonial.webp",
    ctaText: "Ver más",
    ctaLink: "https://terrenoslafortunacr.com",
    content: () => {
      return (
        <p>
          Ubicado a pocos minutos del centro de La Fortuna, este lote ofrece la combinación perfecta entre naturaleza y comodidad. Rodeado de áreas verdes y con vista parcial al Volcán Arenal, es ideal para construir tu casa soñada o una propiedad vacacional. <br /> <br />
          Disfrutá del aire puro, la tranquilidad del campo y la cercanía a los principales atractivos turísticos. Además, cuenta con acceso a servicios públicos y excelente conectividad.
        </p>
      );
    },
  },
  {
    description: "Inversión inteligente",
    title: "Terreno para desarrollo",
    src: "/images/invu.webp",
    ctaText: "Ver más",
    ctaLink: "https://terrenoslafortunacr.com",
    content: () => {
      return (
        <p>
          Este terreno plano y listo para construir es una excelente oportunidad para inversionistas. Ubicado en una zona de alta plusvalía, es perfecto para desarrollar proyectos residenciales, turísticos o comerciales. <br /> <br />
          Con acceso a todos los servicios y rodeado de naturaleza, representa una inversión estratégica con gran retorno garantizado.
        </p>
      );
    },
  },
  {
    description: "Vivir cerca del volcán",
    title: "Terreno con vista",
    src: "/images/colonial/IMG_6325.JPEG",
    ctaText: "Ver más",
    ctaLink: "https://terrenoslafortunacr.com",
    content: () => {
      return (
        <p>
          Imaginá despertar cada día con una vista directa al majestuoso Volcán Arenal. Este terreno exclusivo ofrece una experiencia única en una de las zonas más visitadas de Costa Rica. <br /> <br />
          Ideal para construir un Airbnb o una cabaña turística, está rodeado de aguas termales, cataratas y naturaleza exuberante. Una joya en el corazón de La Fortuna.
        </p>
      );
    },
  },
  {
    description: "Tu refugio natural",
    title: "Lote entre jardines",
    src: "/images/garden.webp",
    ctaText: "Ver más",
    ctaLink: "https://terrenoslafortunacr.com",
    content: () => {
      return (
        <p>
          Este lote se encuentra en una comunidad tranquila y rodeada de jardines tropicales, ideal para quienes buscan paz, privacidad y contacto con la naturaleza. <br /> <br />
          Perfecto para una casa de retiro, proyecto ecológico o residencia permanente. Un espacio donde el canto de los pájaros y la brisa fresca son parte de tu día a día.
        </p>
      );
    },
  },
];

