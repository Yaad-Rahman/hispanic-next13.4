export type HeadingProps = {
  children: React.ReactNode;
  className?: String;
  center?: boolean;
  weight?: 'bold' | 'semibold' | 'normal';
  level?: 0 | 0.5 | 1 | 2 | 2.5 | 3 | 4 | 5 | 6;
  color?: 'dark' | 'mediumDark' | 'lightDark' | 'white' | 'noStyle';
  lexend?: boolean;
};
