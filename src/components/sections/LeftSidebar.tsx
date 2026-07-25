import { SocialLinks } from '@/components/ui/SocialLinks';
import { SkillTags } from '@/components/ui/SkillTags';

const skills = [
  'wellness tech',
  'data analysis',
  'web development',
  'content creation',
  'product building',
  'alchemist',
];

export function LeftSidebar() {
  return (
    <div className="flex flex-col gap-8">
      {/* Brand */}
      <h1 className="font-serif text-base font-medium uppercase tracking-[0.1em] text-charcoal">
        Gia Pereira
      </h1>

      {/* Social Links */}
      <SocialLinks orientation="vertical" />

      {/* Skills */}
      <SkillTags skills={skills} />

      {/* Star accent */}
      <div className="text-star-gold text-2xl">✦</div>
    </div>
  );
}
