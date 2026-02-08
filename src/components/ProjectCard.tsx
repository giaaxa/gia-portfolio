import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image?: string;
  link?: string;
  role?: string;
  year?: string;
  external?: boolean;
  cosmic?: boolean;
}

export const ProjectCard = ({ title, description, tags, image, link, role, year, external, cosmic }: ProjectCardProps) => {
  const linkProps = external
    ? { href: link || "#", target: "_blank" as const, rel: "noopener noreferrer" }
    : { href: link || "#" };

  if (cosmic) {
    return (
      <a
        {...linkProps}
        className="group block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cosmic-violet rounded-2xl"
      >
        <div className="card-cosmic overflow-hidden group-hover:translate-y-[-8px] group-hover:scale-[1.02] transition-all duration-300 ease-out">
          {image && (
            <div className="aspect-[16/10] overflow-hidden">
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
              />
            </div>
          )}

          <div className="p-6 space-y-3">
            <div className="flex items-start justify-between gap-4">
              <h3 className="font-serif text-lg group-hover:text-cosmic-glow transition-colors duration-300" style={{ color: '#f0eef5' }}>
                {title}
              </h3>
              <ArrowUpRight className="w-4 h-4 text-cosmic-glow/30 group-hover:text-cosmic-glow group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 flex-shrink-0 mt-1" />
            </div>

            <p className="text-sm leading-relaxed line-clamp-2" style={{ color: 'rgba(240, 238, 245, 0.55)' }}>
              {description}
            </p>

            {tags.length > 0 && (
              <div className="flex flex-wrap gap-1.5 pt-1">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-full bg-cosmic-violet/15 text-cosmic-glow/80 border border-cosmic-violet/25 group-hover:border-cosmic-violet/50 group-hover:bg-cosmic-violet/25 transition-colors duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        {(role || year) && (
          <p className="mt-2.5 text-xs" style={{ color: 'rgba(240, 238, 245, 0.35)' }}>
            {[role, year].filter(Boolean).join(" · ")}
          </p>
        )}
      </a>
    );
  }

  return (
    <a
      {...linkProps}
      className="group block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sage rounded-2xl"
    >
      <div className="card-organic overflow-hidden group-hover:translate-y-[-8px] group-hover:scale-[1.02] group-hover:shadow-[0_8px_30px_rgba(139,157,131,0.12),0_2px_8px_rgba(0,0,0,0.04)] group-hover:border-sage/20 transition-all duration-300 ease-out">
        {image && (
          <div className="aspect-[16/10] overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
            />
          </div>
        )}

        <div className="p-6 space-y-3">
          <div className="flex items-start justify-between gap-4">
            <h3 className="font-serif text-lg text-charcoal group-hover:text-sage-dark transition-colors duration-300">
              {title}
            </h3>
            <ArrowUpRight className="w-4 h-4 text-charcoal-light/20 group-hover:text-sage group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 flex-shrink-0 mt-1" />
          </div>

          <p className="text-charcoal-light/55 text-sm leading-relaxed line-clamp-2">
            {description}
          </p>

          {tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 pt-1">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2.5 py-1 rounded-full bg-sage-50 text-sage-dark/80 border border-sage-100 group-hover:border-sage/30 group-hover:bg-sage-100/60 transition-colors duration-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {(role || year) && (
        <p className="mt-2.5 text-xs text-charcoal-light/35">
          {[role, year].filter(Boolean).join(" · ")}
        </p>
      )}
    </a>
  );
};
