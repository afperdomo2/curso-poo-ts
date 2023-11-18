import { Dog } from './02-inheritance';

/**
 * En TypeScript, los "generics" son una característica que
 * permite escribir código flexible y reutilizable al trabajar
 * con tipos de datos. Los generics permiten que una función,
 * clase o interfaz acepte y trabaje con diferentes tipos de
 * datos sin perder información sobre esos tipos. Esto proporciona
 * un alto nivel de abstracción y flexibilidad en el diseño de
 * software.
 */

// Ejemplo de una función genérica
function getValue<myType>(value: myType) {
  return value;
}

// Uso de la función con diferentes tipos
getValue<number>(12).toFixed();
getValue<string>('13').toLowerCase();
getValue<number[]>([1, 22, 33]).forEach;

const fifi = new Dog('Fifi', 'Felipe');
getValue<Dog>(fifi);
