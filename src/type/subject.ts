export type subjectType = '전공' | '전공필수' | '전공기초';
export type FusionType = '전공기초' | '전공필수' | '관계학';
export type SubType = '융합' | '신뢰' | '소통' | '도전' | '창의';
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
export interface IGeneralElective extends Subject {
  type: '선택교양';
  subtype: SubType;
}
export interface IEssentialElective extends Subject {
  type: '핵심교양';
  subtype: SubType;
}
export interface IRequireElective extends Subject {
  type: '필수교양';
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
