import { ReactNode } from "react";

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
  fullHeight?: boolean;
}

export const Section = ({ id, children, className = "", fullHeight = false }: SectionProps) => {
  return (
    <section 
      id={id} 
      className={`py-[72px] md:py-[96px] px-6 ${fullHeight ? 'min-h-screen flex items-center' : ''} ${className}`}
    >
      <div className="max-w-[1180px] mx-auto w-full">{children}</div>
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
    <div className={`mb-12 ${align === 'center' ? 'text-center' : ''}`}>
      <h2 className="text-foreground mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-muted-foreground max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
};
