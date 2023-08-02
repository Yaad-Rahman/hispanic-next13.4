export const Link = ({
  href,
  children,
}: {
  href: string;
  children: string;
}) => {
  return (
    <a href={href}>
      <p className=" font-lexendFont font-bold text-primary-600">{children}</p>
    </a>
  );
};
