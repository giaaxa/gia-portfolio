import { ArrowRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  outcome: string;
  tags: string[];
  image?: string;
  link?: string;
  category?: string;
  role?: string;
  year?: string;
}

export const ProjectCard = ({ title, outcome, tags, image, link, category, role, year }: ProjectCardProps) => {
  return (
    <a 
      href={link || "#"} 
      className="group block"
    >
      <div className="card-elevated-hover overflow-hidden">
        {/* Image */}
        <div className="aspect-[16/10] bg-[hsl(220,14%,96%)] overflow-hidden">
          {image ? (
            <img 
              src={image} 
              alt={title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-muted-foreground text-sm">
              Project preview
            </div>
          )}
        </div>
        
        {/* Content */}
        <div className="p-6 space-y-3">
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
              {title}
            </h3>
            <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0" />
          </div>
          
          <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
            {outcome}
          </p>
        </div>
      </div>
      
      {/* Caption row outside card */}
      {(category || role || year) && (
        <p className="mt-3 text-xs text-muted-foreground">
          {[category, role, year].filter(Boolean).join(" · ")}
        </p>
      )}
    </a>
  );
};
