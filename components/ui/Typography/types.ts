export type TypographyProps = {
  children: string | React.ReactNode | undefined;
  size?: 'xl' | 'large' | 'medium' | 'small';
  weight?: 'bold' | 'semibold' | 'medium' | 'normal';
  variant?: 'dark' | 'mediumDark' | 'lightGray' | 'white' | 'noStyle';
  className?: string;
  lexend?: boolean;
  center?: boolean;
};
