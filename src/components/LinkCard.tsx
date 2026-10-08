import { ArrowIcon, BlogIcon, GithubIcon, LinkedinIcon } from "./icons";

const ICONS = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  blog: BlogIcon,
} as const;

export type LinkIconKey = keyof typeof ICONS;

type LinkCardProps = {
  title: string;
  href: string;
  icon: LinkIconKey;
  clickCount: number;
  onLinkClick: () => void;
};

export default function LinkCard({ title, href, icon, clickCount, onLinkClick }: LinkCardProps) {
  const Icon = ICONS[icon];

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      onClick={onLinkClick}
      className="group flex items-center gap-3 rounded-3xl border border-white/60 bg-white/40 px-4 py-3.5 shadow-[0_4px_16px_-4px_rgba(194,101,34,0.12)] backdrop-blur-md transition duration-200 ease-out hover:-translate-y-0.5 hover:border-white/80 hover:bg-white/60 hover:shadow-[0_8px_20px_-6px_rgba(194,101,34,0.18)]"
    >
      <span className="flex h-9 w-9 flex-none items-center justify-center rounded-xl bg-orange-50/80 text-orange-500">
        <Icon className="h-[18px] w-[18px]" />
      </span>
      <span className="flex-1 text-sm font-medium text-stone-700">{title}</span>
      <span className="flex-none text-xs text-stone-400">{clickCount}회</span>
      <ArrowIcon className="h-4 w-4 flex-none text-stone-300 transition-colors duration-200 group-hover:text-orange-400" />
    </a>
  );
}
