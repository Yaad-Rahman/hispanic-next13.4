export type EventCardType = {
  id: number;
  eventName: string;
  eventImage: string;
  date: string;
  address: string;
  isFree: boolean;
};

export type ImageCardType = {
  title: string;
  subTitle?: string;
  image: string;
  height?: number;
};

export type LinkCardType = {
  logo: string;
  title: string;
  description: string;
  link: string;
};
