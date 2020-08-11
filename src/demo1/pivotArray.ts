import {getArray2d} from './functions';

export const pivotArray = (arr: any[]) => {
  const newArr: any[] = [];
  arr[0].forEach(() => newArr.push(new Array(arr.length)));

  for (let i = 0; i < newArr.length; i++) {
    for (let j = 0; j < newArr[0].length; j++) {
      newArr[i][j] = getArray2d(arr, i, j);
    }
  }
  return newArr;
};
