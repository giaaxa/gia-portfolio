import { ArrowUpRight } from "lucide-react";
import { Badge } from "./ui/badge";

interface ProjectCardProps {
  title: string;
  outcome: string;
  tags: string[];
  image?: string;
  link?: string;
}

export const ProjectCard = ({ title, outcome, tags, image, link }: ProjectCardProps) => {
  return (
    <div className="group card-elevated-hover rounded-2xl overflow-hidden">
      {/* Image */}
      <div className="aspect-[16/10] bg-muted overflow-hidden">
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
      <div className="p-6 space-y-4">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-display font-semibold text-foreground group-hover:text-primary transition-colors">
            {title}
          </h3>
          {link && (
            <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
          )}
        </div>
        
        <p className="text-muted-foreground text-sm leading-relaxed">
          {outcome}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};