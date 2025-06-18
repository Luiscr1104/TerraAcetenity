import { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div
      className={cn(
        "fixed top-10 inset-x-0 max-w-6xl mx-auto z-50 bg-white backdrop-blur-md rounded-xl shadow-xl border border-gray-200 px-4 py-2",
        className
      )}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="Logo Terrenos La Fortuna"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="text-lg font-bold text-gold">Terrenos La Fortuna</span>
        </div>

        <Menu setActive={setActive}>
          <MenuItem setActive={setActive} active={active} item="Propiedades">
            <div className="flex flex-col space-y-2 text-sm">
              <HoveredLink href="/propiedades">Ver todas</HoveredLink>
              <HoveredLink href="/residencial">Residencial</HoveredLink>
              <HoveredLink href="/condominio">Condominio</HoveredLink>
              <HoveredLink href="/financiamiento">Financiamiento</HoveredLink>
            </div>
          </MenuItem>

          <MenuItem setActive={setActive} active={active} item="Características">
            <div className="grid grid-cols-2 gap-6 text-sm p-4">
              <ProductItem
                title="100% Financiamiento"
                href="/financiamiento"
                src="/images/colonial/IMG_6286.JPEG"
                description="Compra tu terreno sin prima y solo con cédula."
              />
              <ProductItem
                title="Titulados y listos"
                href="/propiedades"
                src="/images/colonial/IMG_6286.JPEG"
                description="Propiedades con escritura en regla."
              />
              <ProductItem
                title="Ubicación privilegiada"
                href="/ubicacion"
                src="/images/colonial/IMG_6286.JPEG"
                description="Cerca del Volcán Arenal y zonas turísticas."
              />
              <ProductItem
                title="Construcción opcional"
                href="/construccion"
                src="/images/colonial/IMG_6286.JPEG"
                description="Ofrecemos paquetes con casa incluida."
              />
            </div>
          </MenuItem>

          <MenuItem setActive={setActive} active={active} item="Testimonios">
            <div className="flex flex-col space-y-2 text-sm">
              <HoveredLink href="/testimonios">Clientes felices</HoveredLink>
              <HoveredLink href="/video-testimonios">Videos</HoveredLink>
              <HoveredLink href="/galeria">Galería</HoveredLink>
            </div>
          </MenuItem>

          <MenuItem setActive={setActive} active={active} item="Contacto">
            <div className="flex flex-col space-y-2 text-sm">
              <HoveredLink href="/contacto">Formulario</HoveredLink>
              <HoveredLink href="https://wa.me/506XXXXXXXX">WhatsApp</HoveredLink>
              <HoveredLink href="/agentes">Agentes</HoveredLink>
            </div>
          </MenuItem>
        </Menu>

        <a
          href="/contacto"
          className="hidden md:inline-block bg-gold hover:bg-orange-500 text-white text-sm font-medium px-4 py-2 rounded-full transition"
        >
          Cotiza ahora
        </a>
      </div>
    </div>
  );
}
