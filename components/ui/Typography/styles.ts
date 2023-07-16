export const classes = {
  weight: (w: string) => {
    return `font-${w}`;
  },
  size: {
    small: 'text-sm',
    medium: 'text-base',
    large: 'sm:text-lg text-sm',
    xl: 'sm:text-xl text-base',
  },
  variant: {
    dark: 'text-primary-900',
    mediumDark: 'text-primary-800',
    lightGray: 'text-gray-600',
    white: 'text-white',
    noStyle: '',
  },
};
