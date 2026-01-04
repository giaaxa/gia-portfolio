interface StatBlockProps {
  value: string;
  label: string;
}

export const StatBlock = ({ value, label }: StatBlockProps) => {
  return (
    <div className="text-center md:text-left">
      <div className="text-4xl md:text-5xl font-display font-bold text-primary mb-2">
        {value}
      </div>
      <p className="text-sm text-muted-foreground">
        {label}
      </p>
    </div>
  );
};