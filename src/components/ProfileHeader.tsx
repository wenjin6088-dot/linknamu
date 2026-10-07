type ProfileHeaderProps = {
  name: string;
  bio: string;
  avatarSrc?: string;
};

export default function ProfileHeader({ name, bio, avatarSrc }: ProfileHeaderProps) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="h-24 w-24 overflow-hidden rounded-full border-4 border-white bg-orange-50 shadow-[0_10px_24px_-6px_rgba(194,101,34,0.35)] ring-1 ring-orange-900/5">
        {avatarSrc ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={avatarSrc} alt={name} className="h-full w-full object-cover" />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-lg font-semibold text-orange-500">
            {name.charAt(0)}
          </div>
        )}
      </div>
      <h1 className="mt-5 text-base font-bold tracking-tight text-stone-800">{name}</h1>
      <p className="mt-1.5 text-[13px] text-stone-500">{bio}</p>
    </div>
  );
}
