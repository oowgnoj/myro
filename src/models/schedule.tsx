
export enum Week {
  '월' = 'mon',
  '화' = 'tue',
  '수' = 'wed',
  '목' = 'thu',
  '금' = 'fri',
  '토' = 'sat',
  '일' = 'sun',
}

export interface Schedule {
  mon: boolean;
  tue: boolean;
  wed: boolean;
  thu: boolean;
  fri: boolean;
  sat: boolean;
  sun: boolean;
}


// export class Schedule {
//   mon: boolean;
//   tue: boolean;
//   wed: boolean;
//   thu: boolean;
//   fri: boolean;
//   sat: boolean;
//   sun: boolean;

//   constructor(
//     mon: boolean,
//     tue: boolean,
//     wed: boolean,
//     thu: boolean,
//     fri: boolean,
//     sat: boolean,
//     sun: boolean,
//   ) {
//     this.mon = mon;
//     this.tue = tue;
//     this.wed = wed;
//     this.thu = thu;
//     this.fri = fri;
//     this.sat = sat;
//     this.sun = sun;
//   }

//   convertToProp(text: string): string {
//     return Week[text];
//   }

//   convertToText(prop: string): string | void {
//     for (const key in Week) {
//       if (Week[key] === prop) {
//         return key;
//       }
//     }
//   }

//   updateStatus(text: string, status: boolean): void {
//     const prop = Week[text];
//     this[prop] = status;
//   }
// }
