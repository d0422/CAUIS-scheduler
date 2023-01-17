import { ISubject } from '../../type/subject';
import { majorBase } from './base';
import { majorRequire } from './require';
const majorSubSet: ISubject[] = [
  {
    name: '법학개론',
    type: '전공',
    credit: 3,
  },
  {
    name: '경영경제데이터 분석 소프트웨어',
    type: '전공',
    credit: 3,
  },
  {
    name: '사이버 침해사고 대응',
    type: '전공',
    credit: 3,
  },
  {
    name: 'SW 프로그래밍 2',
    type: '전공',
    credit: 3,
  },
  {
    name: '보안 커뮤니케이션',
    type: '전공',
    credit: 3,
  },
  {
    name: '보안 통계학',
    type: '전공',
    credit: 3,
  },
];
export const major = { ...majorBase, ...majorRequire, ...majorSubSet };
