import ProfileHeader from "@/components/ProfileHeader";
import LinkCardList, { type LinkItem } from "@/components/LinkCardList";

const profile = {
  name: "김개발",
  bio: "풀스택 개발자 | 요즘에는 AI 개발에 관심이 많아요",
  avatarSrc: "https://placehold.co/150x150/orange/white",
};

const links: LinkItem[] = [
  { title: "GitHub", href: "https://github.com/username", icon: "github" },
  { title: "LinkedIn", href: "https://linkedin.com/in/username", icon: "linkedin" },
  { title: "Blog", href: "https://example.com/blog", icon: "blog" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#FFF9F0] via-[#FFF1E0] to-[#FFE2C4]">
      <div className="mx-auto flex w-full max-w-sm flex-col px-7 py-20 sm:py-24">
        <ProfileHeader name={profile.name} bio={profile.bio} avatarSrc={profile.avatarSrc} />
        <div aria-hidden="true" className="mx-auto mt-10 h-px w-8 bg-orange-900/10" />
        <section className="mt-10">
          <LinkCardList links={links} />
        </section>
      </div>
    </main>
  );
}
