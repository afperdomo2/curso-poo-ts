export class Animal {
  constructor(public name: string) {}

  move() {
    console.info('Moving along!');
  }

  greeting() {
    return `Hello, I'm ${this.name}`;
  }
}

export class Dog extends Animal {
  constructor(name: string, public owner: string) {
    super(name);
  }

  woof(times: number) {
    for (let index = 0; index < times; index++) {
      console.info('Woof!');
    }
  }
}

const fifi = new Animal('Fifi');
fifi.move();
console.info(fifi.greeting());

const pluto = new Dog('Pluto', 'Pedro');
console.info(pluto.greeting());
pluto.woof(4);
console.info(`The ${pluto.name}'s owner is ${pluto.owner}`);
