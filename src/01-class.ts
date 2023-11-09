export class MyDate {
  constructor(
    private year: number = 1900,
    private month: number = 1,
    private day: number = 1
  ) {}

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

const voidDate = new MyDate();
console.info('voidDate - printFormat:', voidDate.printFormat());

const myDate = new MyDate(2023, 2, 9);
console.info('myDate - printFormat:', myDate.printFormat());
myDate.add(2, 'days');
console.info('myDate - printFormat:', myDate.printFormat());
myDate.add(10, 'years');
console.info('myDate - printFormat:', myDate.printFormat());
