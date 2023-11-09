export class MyDate {
  constructor(
    private _year: number = 2000,
    private _month: number = 1,
    private _day: number = 1
  ) {}

  private addPadding(value: number): string {
    return value < 10 ? `0${value}` : `${value}`;
  }

  printFormat(): string {
    const day = this.addPadding(this._day);
    const month = this.addPadding(this._month);
    return `${day}/${month}/${this._year}`;
  }

  add(amount: number, type: 'days' | 'months' | 'years') {
    if (type === 'days') this._day += amount;
    if (type === 'months') this._month += amount;
    if (type === 'years') this._year += amount;
  }

  get isHoliday(): boolean {
    return true;
  }

  get isLeapYear(): boolean {
    if (this._year % 400 === 0) return true;
    if (this._year % 100 === 0) return false;
    return this._year % 4 === 0;
  }

  get day() {
    return this._day;
  }

  get month() {
    return this._month;
  }

  get year() {
    return this._year;
  }
}

const voidDate = new MyDate();
console.info('printFormat:', voidDate.printFormat());
console.info('isLeapYear:', voidDate.isLeapYear);

const myDate = new MyDate(2023, 2, 9);
console.info('\nprintFormat:', myDate.printFormat());
myDate.add(2, 'days');
console.info('printFormat:', myDate.printFormat());
myDate.add(10, 'years');
console.info('printFormat:', myDate.printFormat());

console.info('day:', myDate.day);
console.info('month:', myDate.month);
console.info('year:', myDate.year);

console.info('isHoliday:', myDate.isHoliday);
console.info('isLeapYear:', myDate.isLeapYear);
