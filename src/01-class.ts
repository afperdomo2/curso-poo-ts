// Ejemplo de instancia de clases, usando la clase Date
const date = new Date();
date.getHours();
console.info('date:', date);

class MyDate {
  year: number;
  month: number;
  day: number;

  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }
}

const myDate = new MyDate(2023, 11, 9);
console.info('myDate:', myDate);
