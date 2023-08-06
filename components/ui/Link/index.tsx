export const Link = ({
  href,
  children,
  className,
}: {
  href: string;
  children: string;
  className?: string;
}) => {
  return (
    <a href={href}>
      <p className={className || 'font-lexendFont font-bold text-primary-600'}>
        {children}
      </p>
    </a>
  );
};
