"use client";

import { useEffect, useState } from "react";
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
  const [counts, setCounts] = useState<Record<string, number>>({});

  useEffect(() => {
    let cancelled = false;

    fetch("/api/clicks")
      .then((res) => res.json())
      .then((data: Record<string, number>) => {
        if (!cancelled) setCounts(data);
      })
      .catch(() => {});

    return () => {
      cancelled = true;
    };
  }, []);

  const handleClick = (href: string) => {
    setCounts((prev) => ({ ...prev, [href]: (prev[href] ?? 0) + 1 }));

    fetch("/api/clicks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ href }),
    }).catch(() => {});
  };

  return (
    <div className="flex w-full flex-col gap-3.5">
      {links.map((link) => (
        <LinkCard
          key={link.href}
          title={link.title}
          href={link.href}
          icon={link.icon}
          clickCount={counts[link.href] ?? 0}
          onLinkClick={() => handleClick(link.href)}
        />
      ))}
    </div>
  );
}
