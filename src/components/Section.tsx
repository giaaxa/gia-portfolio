import { ReactNode } from "react";

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
  sand?: boolean;
  dark?: boolean;
}

export const Section = ({ id, children, className = "", sand = false, dark = false }: SectionProps) => {
  return (
    <section
      id={id}
      className={`py-20 md:py-28 px-6 ${sand ? 'bg-sand-section' : ''} ${dark ? 'bg-dark-section' : ''} ${className}`}
    >
      <div className="max-w-[1080px] mx-auto w-full relative z-10">{children}</div>
    </section>
  );
};

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export const SectionHeader = ({ title, subtitle, align = 'left' }: SectionHeaderProps) => {
  return (
    <div className={`mb-14 ${align === 'center' ? 'text-center' : ''}`}>
      <h2 className="font-serif text-charcoal mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-charcoal-light/60 max-w-xl">
          {subtitle}
        </p>
      )}
    </div>
  );
};
