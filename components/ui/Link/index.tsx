export const Link = ({
  href,
  target,
  children,
  className,
}: {
  href: string;
  target?: string;
  children: string;
  className?: string;
}) => {
  return (
    <a href={href} target={target}>
      <p className={className || 'font-lexendFont font-bold text-primary-600'}>
        {children}
      </p>
    </a>
  );
};
