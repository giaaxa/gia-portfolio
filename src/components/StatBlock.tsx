interface StatBlockProps {
  value: string;
  label: string;
}

export const StatBlock = ({ value, label }: StatBlockProps) => {
  return (
    <div className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-foreground mb-2 relative inline-block">
        {value}
        <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-primary" />
      </div>
      <p className="text-sm text-muted-foreground mt-3">
        {label}
      </p>
    </div>
  );
};
