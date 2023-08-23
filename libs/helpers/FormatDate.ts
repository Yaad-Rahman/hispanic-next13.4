export const FormatDateTime = (
  timestamp: number,
  variant?: 'only-time' | 'only-date' | 'only-day'
) => {
  const date = new Date(timestamp * 1000);

  let options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  };

  if (variant === 'only-time') {
    options = {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    };
  }

  if (variant === 'only-date') {
    options = {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    };
  }

  if (variant === 'only-day') {
    options = { weekday: 'long' };
  }

  const formatter = new Intl.DateTimeFormat('en-US', options);

  return formatter.format(date).replace(/,([^,]*)$/, ' •$1');
};
