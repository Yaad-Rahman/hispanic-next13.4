export type EventCardType = {
  id: number;
  eventName: string;
  eventImage: string;
  date: string;
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
