export class MyDate {
  public year: number;
  public month: number;
  public day: number;

  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }

  public printFormat(): string {
    return `${this.day}/${this.month}/${this.year}`;
  }

  public add(amount: number, type: 'days' | 'months' | 'years') {
    if (type === 'days') this.day += amount;
    if (type === 'months') this.month += amount;
    if (type === 'years') this.year += amount;
  }
}

const myDate = new MyDate(2023, 11, 9);
console.info('printFormat:', myDate.printFormat());
myDate.add(2, 'days');
console.info('printFormat:', myDate.printFormat());
myDate.add(10, 'years');
console.info('printFormat:', myDate.printFormat());

/**
 * Al ser públicos los las propiedades, se pueden mutar y acceder
 * desde afuera de la clase
 */
myDate.year = 2999;
console.info(myDate.year);
