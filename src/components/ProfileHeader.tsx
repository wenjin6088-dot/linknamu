type ProfileHeaderProps = {
  name: string;
  bio: string;
  avatarSrc?: string;
};

export default function ProfileHeader({ name, bio, avatarSrc }: ProfileHeaderProps) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="h-20 w-20 overflow-hidden rounded-full border border-white bg-sky-50 shadow-[0_1px_3px_rgba(15,23,42,0.08)]">
        {avatarSrc ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={avatarSrc} alt={name} className="h-full w-full object-cover" />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-lg font-semibold text-sky-500">
            {name.charAt(0)}
          </div>
        )}
      </div>
      <h1 className="mt-4 text-base font-semibold tracking-tight text-slate-900">{name}</h1>
      <p className="mt-1.5 text-[13px] text-slate-500">{bio}</p>
    </div>
  );
}
