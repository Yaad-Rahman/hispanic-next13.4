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

  return variant === 'only-date'
    ? formatter.format(date)
    : formatter.format(date).replace(/,([^,]*)$/, ' •$1');
};

export const FormatDateToTimestamp = (date: string) => {
  const timestamp = new Date(date).getTime() / 1000;

  return timestamp;
};

export const FormatDateToInputValue = (date: string) => {
  const value = new Date(date).toISOString().substring(0, 10);

  return value;
};
