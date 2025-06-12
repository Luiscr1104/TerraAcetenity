import { StickyBanner } from "@/components/ui/sticky-banner";

export function StickyBannerDemo() {
  return (
    <div className="relative flex w-full flex-col overflow-y-auto">
      <StickyBanner className="bg-gradient-to-b from-green-500 to-green-600">
        <p className="mx-0 max-w-[90%] text-white drop-shadow-md">
          ¡Todos los terrenos en venta en Costa Rica!{" "}
          <a href="#" className="transition duration-200 hover:underline">
            Descubre más
          </a>
        </p>
      </StickyBanner>
    </div>
  );
}