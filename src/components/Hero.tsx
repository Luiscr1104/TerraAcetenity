"use client";

import { motion } from "motion/react";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { StickyBannerDemo } from "@/components/StickyBannerDemo"; // Ajusta la ruta si es necesario
import { BentoGridSecondDemo } from "./BentoGridSecondDemo";
import { BentoGridTerceroDemo } from "./BentoGridTerceroDemo";

export function HeroSectionOne() {
  const synonyms = [
    { text: "terreno", className: "text-emerald-600 dark:text-emerald-400" },
  ];

  return (
    <>
      {/* StickyBanner sobre el Hero */}
      <StickyBannerDemo />

      {/* Hero */}
      <div className="relative mx-auto my-10 flex max-w-7xl flex-col items-center justify-center">
        {/* Decorative Borders */}
        <div className="absolute inset-y-0 left-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
          <div className="absolute top-0 h-40 w-px bg-gradient-to-b from-transparent via-emerald-500 to-transparent" />
        </div>
        <div className="absolute inset-y-0 right-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
          <div className="absolute h-40 w-px bg-gradient-to-b from-transparent via-emerald-500 to-transparent" />
        </div>


        {/* Content */}
        <div className="px-4 py-10 md:py-20">
          <h1 className="relative z-10 mx-auto max-w-4xl text-center text-2xl font-bold text-slate-700 md:text-4xl lg:text-7xl dark:text-slate-300">
            {"Encuentre su terreno en Costa Rica"
              .split(" ")
              .map((word, index) => {
                if (word.toLowerCase() === "terreno") {
                  return (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                      animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                      transition={{
                        duration: 0.3,
                        delay: index * 0.1,
                        ease: "easeInOut",
                      }}
                      className="mr-2 inline-block"
                    >
                      <TypewriterEffect
                        words={synonyms}
                        className="inline-block text-4xl md:text-6xl lg:text-7xl"
                        cursorClassName="bg-emerald-500"
                      />
                    </motion.span>
                  );
                }
                return (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                    animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.1,
                      ease: "easeInOut",
                    }}
                    className="mr-2 inline-block"
                  >
                    {word}
                  </motion.span>
                );
              })}
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.8 }}
            className="relative z-10 mx-auto max-w-xl py-4 text-center text-lg font-normal text-neutral-600 dark:text-neutral-400"
          >
            Descubra la oportunidad de invertir en el terreno que mejor se adapte
            a sus sueños y necesidades.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 1 }}
            className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4"
          >
            <button className="w-60 transform rounded-lg bg-green-600 px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">
              Catálogo
            </button>
            <button className="w-60 transform rounded-lg border border-gray-300 bg-white px-6 py-2 font-medium text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-100 dark:border-gray-700 dark:bg-black dark:text-white dark:hover:bg-gray-900">
              Contacto  
            </button>
          </motion.div>

          {/* Image Preview */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 1.2 }}
            className="relative z-10 mt-20 rounded-3xl border border-neutral-200 bg-neutral-100 p-4 shadow-md dark:border-neutral-800 dark:bg-neutral-900"
          >
          <h2 className="my-10 text-center text-3xl md:text-4xl font-bold text-neutral-800 dark:text-neutral-200">
            El Invu
          </h2>
	        <BentoGridSecondDemo />	
          <h2 className="mt-20 my-10 text-center text-3xl md:text-4xl font-bold text-neutral-800 dark:text-neutral-200">
            Casa Colonial
          </h2>
          <BentoGridTerceroDemo />	
          <h2 className="mt-20 my-10 text-center text-3xl md:text-4xl font-bold text-neutral-800 dark:text-neutral-200">
            Garden Luxury
          </h2>
          <BentoGridTerceroDemo />	
          </motion.div>
        </div>
      </div>
    </>
  );
}
