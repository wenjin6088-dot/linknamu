import LinkCard, { type LinkIconKey } from "./LinkCard";

export type LinkItem = {
  title: string;
  href: string;
  icon: LinkIconKey;
};

type LinkCardListProps = {
  links: LinkItem[];
};

export default function LinkCardList({ links }: LinkCardListProps) {
  return (
    <div className="flex w-full flex-col gap-2.5">
      {links.map((link) => (
        <LinkCard key={link.href} title={link.title} href={link.href} icon={link.icon} />
      ))}
    </div>
  );
}
