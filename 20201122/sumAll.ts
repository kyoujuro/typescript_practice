function sumAll(...numbers: number[]): number{
   return numbers.reduce((total, n) => total + n, 0)
}

console.log(sumAll(1,2,3))