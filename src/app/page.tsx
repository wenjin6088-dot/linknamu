import ProfileHeader from "@/components/ProfileHeader";
import LinkCardList, { type LinkItem } from "@/components/LinkCardList";

const profile = {
  name: "김개발",
  bio: "세계 최강 바이브코더",
};

const links: LinkItem[] = [
  { title: "GitHub", href: "https://github.com/username", icon: "github" },
  { title: "LinkedIn", href: "https://linkedin.com/in/username", icon: "linkedin" },
  { title: "Blog", href: "https://example.com/blog", icon: "blog" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-white">
      <div className="mx-auto flex w-full max-w-sm flex-col px-6 py-16 sm:py-20">
        <ProfileHeader name={profile.name} bio={profile.bio} />
        <div aria-hidden="true" className="mx-auto mt-10 h-px w-8 bg-sky-100" />
        <section className="mt-10">
          <LinkCardList links={links} />
        </section>
      </div>
    </main>
  );
}
