export class Animal {
  constructor(protected _name: string) {}

  move() {
    console.info('Moving along!');
  }

  greeting() {
    return `Hello, I'm ${this._name}`;
  }

  protected doSomething() {
    console.info('doooo');
  }

  get name() {
    return this._name;
  }
}

export class Dog extends Animal {
  constructor(name: string, public owner: string) {
    super(name);
  }

  woof(times: number) {
    for (let index = 0; index < times; index++) {
      console.info(`${this._name}: Woof!`);
    }
    this.doSomething();
  }

  move() {
    console.info('Moving as a Dog');
    super.move();
  }
}

const fifi = new Animal('Fifi');
fifi.move();
console.info(fifi.greeting());

const pluto = new Dog('Pluto', 'Pedro');
console.info(pluto.greeting());
pluto.woof(3);
pluto.move();
console.info(`The ${pluto.name}'s owner is ${pluto.owner}`);
