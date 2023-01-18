export type subjectType = '전공' | '전공필수' | '전공기초';
export type FusionType = '전공기초' | '전공필수' | '관계학';

export interface Subject {
  hasTaken: boolean;
  name: string;
  credit: number;
}
export interface ISubject extends Subject {
  type: subjectType;
}
export interface IFusion extends Subject {
  type: FusionType;
}
export interface IIndustrialSecurity {
  majorBase: number;
  majorRequire: number;
  major: number;
}
export interface ICyberSecurity {
  majorBase: number;
  majorRequire: number;
  relation: number;
}
