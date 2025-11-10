import { ReactNode } from "react";

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
}

export const Section = ({ id, children, className = "" }: SectionProps) => {
  return (
    <section id={id} className={`min-h-screen py-20 px-6 ${className}`}>
      <div className="max-w-7xl mx-auto">{children}</div>
    </section>
  );
};

export const SectionHeader = ({ overline, title }: { overline?: string; title: string }) => {
  return (
    <div className="mb-12">
      {overline && (
        <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-2">
          {overline}
        </p>
      )}
      <h2 className="text-4xl md:text-5xl font-bold text-gradient">{title}</h2>
    </div>
  );
};
