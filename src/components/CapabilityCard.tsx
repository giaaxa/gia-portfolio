import { LucideIcon } from "lucide-react";

interface CapabilityCardProps {
  icon: LucideIcon;
  title: string;
  items: string[];
}

export const CapabilityCard = ({ icon: Icon, title, items }: CapabilityCardProps) => {
  return (
    <div className="card-elevated p-6 space-y-4">
      <div className="w-10 h-10 rounded-xl bg-[hsl(224,76%,33%,0.08)] flex items-center justify-center">
        <Icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
      </div>
      
      <h3 className="text-lg font-semibold text-foreground">
        {title}
      </h3>
      
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
            <span className="w-1 h-1 rounded-full bg-primary mt-2 flex-shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
