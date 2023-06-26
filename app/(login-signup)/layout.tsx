export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mt-[96px] flex justify-center">
      <div className="flex flex-col items-center gap-6">
        <img
          className="h-[64px] w-[64px]"
          src="/logos/main.png"
          alt="hispanic logo"
        />
        {children}
      </div>
    </div>
  );
}
