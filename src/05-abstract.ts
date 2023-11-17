/**
 * Una clase abstracta es una clase en la programación
 * orientada a objetos que no puede ser instanciada por
 * sí misma y generalmente se utiliza como una clase base
 * para otras clases concretas. La principal característica
 * de una clase abstracta es que puede contener métodos
 * abstractos, los cuales son declarados pero no implementados
 * en la clase abstracta. Estos métodos abstractos deben ser
 * implementados por las clases derivadas (subclases) que
 * heredan de la clase abstracta.
 *
 * En este caso, no se puede instanciar Animal, que es la clase
 * abstracta y para acceder a Animal, solo se puede hacer
 * instanciando las clases que heredan a Animal, como lo son Dog
 */

import { Animal, Dog } from './02-inheritance';

console.info('\n--- Clases abstractas ---\n');

// const rebeca = new Animal('Rebeca');
// console.info(rebeca.greeting());

const chispitas = new Dog('Chispitas', 'María');
console.info(chispitas.greeting());
chispitas.woof(2);
