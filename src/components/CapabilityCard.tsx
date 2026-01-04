import { LucideIcon } from "lucide-react";

interface CapabilityCardProps {
  icon: LucideIcon;
  title: string;
  items: string[];
}

export const CapabilityCard = ({ icon: Icon, title, items }: CapabilityCardProps) => {
  return (
    <div className="card-elevated-hover rounded-2xl p-6 space-y-4">
      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      
      <h3 className="text-lg font-display font-semibold text-foreground">
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