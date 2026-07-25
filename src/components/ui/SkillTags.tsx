interface SkillTagsProps {
  skills: string[];
  className?: string;
}

export function SkillTags({ skills, className = '' }: SkillTagsProps) {
  return (
    <div className={`flex flex-col ${className}`}>
      {skills.map((skill, index) => (
        <div key={skill}>
          {index > 0 && <div className="h-px bg-light-gray my-2" />}
          <span className="text-sm text-charcoal">{skill}</span>
        </div>
      ))}
    </div>
  );
}
