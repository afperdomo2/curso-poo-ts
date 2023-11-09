export class MyDate {
  private year: number;
  private month: number;
  private day: number;

  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }

  private addPadding(value: number): string {
    return value < 10 ? `0${value}` : `${value}`;
  }

  printFormat(): string {
    const day = this.addPadding(this.day);
    const month = this.addPadding(this.month);
    return `${day}/${month}/${this.year}`;
  }

  add(amount: number, type: 'days' | 'months' | 'years') {
    if (type === 'days') this.day += amount;
    if (type === 'months') this.month += amount;
    if (type === 'years') this.year += amount;
  }

  getDay() {
    return this.day;
  }

  getMonth() {
    return this.month;
  }

  getYear() {
    return this.year;
  }
}

const myDate = new MyDate(2023, 2, 9);
console.info('printFormat:', myDate.printFormat());
myDate.add(2, 'days');
console.info('printFormat:', myDate.printFormat());
myDate.add(10, 'years');
console.info('printFormat:', myDate.printFormat());
