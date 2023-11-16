console.log('Math.PI:', Math.PI);
console.log('Math.max():', Math.max(1, 10, 100, 888), '\n');

class MyMath {
  static readonly PI = 3.14;

  static max(...numbers: number[]): number {
    return numbers.reduce((max, number) => (max >= number ? max : number), 0);
  }
}

console.info('MyMath.PI:', MyMath.PI);
console.info('MyMath.max():', MyMath.max(888, 100, 522, 1));
