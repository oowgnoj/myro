export interface IContent {
  id: 1;
  title: string;
  subTitle: string;
  person: string;
  mainImage: string;
  bannerImage: string;
  image1: string;
  image2: string;
  image3: string;
  body1: string;
  body2: string;
  body3: string;
  recommendTime: string;
  mon: Boolean;
  tue: Boolean;
  wed: Boolean;
  thr: Boolean;
  fri: Boolean;
  sat: Boolean;
  sun: Boolean;
  ime: string;
  isSubscribed: boolean;
}
export interface IRoutine {
  id: number;
  contents: IContent;
  mon: boolean;
  tue: boolean;
  wed: boolean;
  thu: boolean;
  fri: boolean;
  sat: boolean;
  sun: boolean;
  alarmTime: string;
  isAlarm: boolean;
  isActive: boolean;
}
