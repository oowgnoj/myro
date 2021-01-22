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
  routines: IRoutine[] | [];
}

export interface IRoutine {
  id: number;
  contents: IContent;
  mon: Boolean;
  tue: Boolean;
  wed: Boolean;
  thu: Boolean;
  fri: Boolean;
  sat: Boolean;
  sun: Boolean;
  alarmTime: string;
  isAlarm: Boolean;
  isActive: Boolean;
}


export interface IStatistics {
  title: string
  contents: IContent[]
}