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
    days: Array<number>;
    mon: boolean;
    tue: boolean;
    wed: boolean;
    thr: boolean;
    fri: boolean;
    sat: boolean;
    sun: boolean;
    ime: string;
    routines: IRoutine[] | [];
  }
  
  export interface IRoutine {
    id: number;
    contents: IContent;
    days: Array<number>;
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
  
  
  export interface IStatistics {
    title: string
    contents: IContent[]
  }


