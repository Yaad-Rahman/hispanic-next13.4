let timeout: any;
export const debounce = (func: () => void, delay: number) => {
  clearTimeout(timeout);

  timeout = setTimeout(func, delay);
};
