import { ArrowRight, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  outcome: string;
  tags: string[];
  image?: string;
  link?: string;
  category?: string;
  role?: string;
  year?: string;
  external?: boolean;
}

export const ProjectCard = ({ title, outcome, tags, image, link, category, role, year, external }: ProjectCardProps) => {
  // Determine if this is a text-only card (no image provided)
  const isTextOnly = !image;

  const linkProps = external 
    ? { href: link || "#", target: "_blank", rel: "noopener noreferrer" }
    : { href: link || "#" };

  return (
    <a 
      {...linkProps}
      className="group block"
    >
      <div className="card-elevated-hover overflow-hidden">
        {/* Image or text-only header */}
        <div className="aspect-[16/10] overflow-hidden">
          {image ? (
            <img 
              src={image} 
              alt={title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />
          ) : (
            <div
              className="w-full h-full flex items-center justify-center p-6 bg-gradient-to-br from-primary/6 to-primary/3 dark:from-primary/12 dark:to-primary/5"
            >
              <span className="text-2xl font-semibold text-foreground/80 text-center">{title}</span>
            </div>
          )}
        </div>
        
        {/* Content */}
        <div className="p-5 space-y-3">
          {!isTextOnly && (
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                {title}
              </h3>
              {external ? (
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-all flex-shrink-0 mt-0.5" />
              ) : (
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0 mt-0.5" />
              )}
            </div>
          )}
          
          <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
            {outcome}
          </p>

          {/* Tags */}
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 pt-1">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-1 rounded-full bg-primary/5 dark:bg-primary/10 text-muted-foreground border border-foreground/6 dark:border-primary/15"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
      
      {/* Caption row outside card */}
      {(category || role || year) && (
        <p className="mt-2.5 text-xs text-muted-foreground">
          {[category, role, year].filter(Boolean).join(" · ")}
        </p>
      )}
    </a>
  );
};
