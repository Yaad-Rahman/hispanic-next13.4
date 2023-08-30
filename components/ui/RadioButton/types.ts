export type RadioButtonType = {
  name: string;
  labelTitle: string;
  labelSubTitle?: string;
  value: string | number | null;
  setFieldValue: (field: string, value: any) => void;
};
