export type EventCardType = {
  eventName: string;
  eventImage: string;
  date: string;
  time: string;
  address: string;
  isFree: boolean;
  price: string;
};

export type ImageCardType = {
  title: string;
  subTitle?: string;
  image: string;
  height?: number;
};
