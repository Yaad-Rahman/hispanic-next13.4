export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-[100vh] justify-center bg-LoginBg pt-[96px]">
      <div className="flex flex-col items-center gap-6">
        <img
          className="h-[64px] w-[64px]"
          src="/logos/logo.svg"
          alt="hispanic logo"
        />
        {children}
      </div>
    </div>
  );
}
