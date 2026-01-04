import { ArrowUpRight } from "lucide-react";

interface ContentItem {
  title: string;
  description: string;
  link?: string;
  tags?: string[];
  image?: string;
}

interface ContentSectionProps {
  items: ContentItem[];
}

export const ContentSection = ({ items }: ContentSectionProps) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item, index) => (
        <a
          key={index}
          href={item.link || "#"}
          target={item.link?.startsWith("http") ? "_blank" : undefined}
          rel={item.link?.startsWith("http") ? "noopener noreferrer" : undefined}
          className="group card-elevated-hover block"
        >
          {/* Thumbnail */}
          <div className="aspect-[16/9] bg-[hsl(220,14%,96%)] overflow-hidden rounded-t-[1.25rem]">
            {item.image ? (
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-muted-foreground text-sm">
                Thumbnail
              </div>
            )}
          </div>
          
          {/* Content */}
          <div className="p-5 space-y-3">
            <div className="flex items-start justify-between gap-3">
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2 link-underline">
                {item.title}
              </h3>
              <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-1" />
            </div>
            
            <p className="text-sm text-muted-foreground line-clamp-2">
              {item.description}
            </p>
            
            {item.tags && item.tags.length > 0 && (
              <div className="flex flex-wrap gap-1.5">
                {item.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="text-xs px-2 py-1 rounded-full bg-[hsl(224,76%,33%,0.08)] text-muted-foreground border border-[hsl(220,30%,8%,0.06)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </a>
      ))}
    </div>
  );
};
