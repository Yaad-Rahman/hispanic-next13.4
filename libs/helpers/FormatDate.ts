export const FormatDateTime = (timestamp: number) => {
  const date = new Date(timestamp * 1000);

  const formatter = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  });

  return formatter.format(date).replace(/,([^,]*)$/, ' •$1');
};
