export type subjectType = '전공' | '전공필수' | '전공기초';
export type FusionType = '전공기초' | '전공필수' | '관계학';
export interface ISubject {
  name: string;
  credit: number;
  type: subjectType;
}
export interface IFusion {
  name: string;
  credit: number;
  type: FusionType;
}
