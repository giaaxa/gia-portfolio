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
      className={`py-24 md:py-32 px-6 ${fullHeight ? 'min-h-screen flex items-center' : ''} ${className}`}
    >
      <div className="max-w-container mx-auto w-full">{children}</div>
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
    <div className={`mb-16 ${align === 'center' ? 'text-center' : ''}`}>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-foreground mb-4">
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