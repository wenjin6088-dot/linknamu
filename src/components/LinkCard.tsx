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
};

export default function LinkCard({ title, href, icon }: LinkCardProps) {
  const Icon = ICONS[icon];

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group flex items-center gap-3 rounded-2xl border border-slate-200/70 bg-white px-4 py-3 transition duration-150 ease-out hover:translate-x-0.5 hover:border-sky-200 hover:bg-sky-50"
    >
      <span className="flex h-9 w-9 flex-none items-center justify-center rounded-xl bg-sky-50 text-sky-600">
        <Icon className="h-[18px] w-[18px]" />
      </span>
      <span className="flex-1 text-sm font-medium text-slate-700">{title}</span>
      <ArrowIcon className="h-4 w-4 flex-none text-slate-300 transition-colors duration-150 group-hover:text-sky-500" />
    </a>
  );
}
