/**
 * Este patrón se usa para evitar la creación de múltiples
 * instancias de una misma clase
 */

export class MyService {
  static instance: MyService | null = null;

  private constructor(private _name: string) {}

  getName() {
    return this._name;
  }

  static create(name: string) {
    if (!MyService.instance) {
      console.info('Instanciando la clase');
      MyService.instance = new MyService(name);
    }
    return MyService.instance;
  }
}

const myService1 = MyService.create('Servicio 1');
console.info(myService1.getName());

const myService2 = MyService.create('Servicio 2');
console.info(myService2.getName());

const myService3 = MyService.create('Servicio 3');
console.info(myService3.getName());

console.info(myService1 === myService2);
