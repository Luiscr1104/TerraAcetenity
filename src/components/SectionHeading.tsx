type Props = {
    badge?: string;
    title: string;
    highlight?: string;
    subtitle?: string;
    align?: "center" | "left";
  };
  
  export default function SectionHeading({
    badge = "Sección",
    title,
    highlight,
    subtitle,
    align = "center",
  }: Props) {
    const alignment = align === "center" ? "text-center items-center" : "text-left items-start";
  
    return (
      <div className={`flex flex-col ${alignment} gap-4 mb-16 px-4`}>
        {/* Badge */}
        <span className="inline-block text-xs font-semibold uppercase tracking-widest bg-[#FDF6E3] text-[#D4AF37] px-4 py-1 rounded-full shadow-sm">
          {badge}
        </span>
  
        {/* Título con span destacado */}
        <h2 className="text-3xl md:text-5xl font-bold text-[#2F4F4F] leading-tight max-w-4xl">
          {title}{" "}
          {highlight && (
            <span className="inline bg-gradient-to-r from-[#D4AF37] to-[#FFD700] bg-clip-text text-transparent">
              {highlight}
            </span>
          )}
        </h2>
  
        {/* Subtítulo */}
        {subtitle && (
          <p className="text-base md:text-lg text-gray-600 max-w-2xl">
            {subtitle}
          </p>
        )}
  
        {/* Línea decorativa */}
        <div className="mt-2 h-[3px] w-16 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] rounded-full" />
      </div>
    );
  }
  