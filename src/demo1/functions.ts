import {pivotArray} from './pivotArray';

// Get an array element in column/row order
export const getArray2d = (a: any[], x: number, y: number) => {
  return a[y][x];
};

export const demo1 = () => {
  let myArr: string[][] =
    [['Name', 'Joe', 'Mary', 'Leon'],
      ['E-mail', 'joe@test.com', 'mary@test.com', 'leon@test.com']];

  console.log(myArr);
  console.log(pivotArray(myArr));
};
