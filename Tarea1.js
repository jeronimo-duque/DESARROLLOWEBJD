//Tarea Jeronimo Andres Duque Laverde 2205219

// Ejemplo y descripción de los métodos del objeto Array
const arr = [3, 7, 1, 9, 5];

// Métodos de Acceso
arr.concat([15, 17]); // Concatena arreglos

arr.includes(1); // Verifica si incluye el número 1

arr.indexOf(5); // Encuentra el índice del número 5

arr.lastIndexOf(9); // Encuentra el último índice del número 9


// Métodos de Iteración
arr.forEach((num) => console.log(num)); // Itera y muestra cada número

arr.every((num) => num > 2); // Verifica si todos son mayores que 2

arr.some((num) => num > 4); // Verifica si al menos uno es mayor que 4

arr.filter((num) => num % 2 === 0); // Filtra los números pares

arr.map((num) => num * 2); // Crea un nuevo arreglo con números duplicados


// Métodos de Modificación
arr.pop(); // Elimina el último elemento

arr.push(8); // Agrega un elemento al final

arr.shift(); // Elimina el primer elemento

arr.unshift(5); // Agrega un elemento al principio

arr.splice(2, 2, 2, 4); // Remueve 2 elementos desde índice 2 y agrega 2, 4

arr.fill(0, 1, 3); // Llena con 0 desde índice 1 hasta 3 el cual no incluye

arr.reverse(); // Invierte el orden


// Métodos de Creación y Copia
arr.slice(1, 4); // Copia elementos desde índice 1 hasta 4 el cual no incluye

Array.from(arr.keys()); // Obtiene un arreglo de índices

Array.from(arr.values()); // Obtiene un arreglo de valores

arr.join(', '); // Convierte en cadena separada por comas


// Métodos de Reducción
arr.reduce((acc, num) => acc + num, 0); // Suma de todos los números

arr.reduceRight((acc, num) => acc - num, 20); // Resta desde la derecha


// Métodos de Búsqueda
arr.find((num) => num > 3); // Encuentra el primer número mayor que 3

arr.findIndex((num) => num > 3); // Encuentra el índice del número mayor que 3

arr.findLast((num) => num > 3); // Encuentra el último número mayor que 3

arr.findLastIndex((num) => num > 3); // Encuentra el último índice mayor que 3


// Métodos de Conversión
arr.toString(); // Convierte en cadena separada por comas

arr.toLocaleString(); // Convierte en cadena localizada


// Métodos de Ordenamiento
arr.sort(); // Ordena los elementos

arr.copyWithin(1, 3, 5); // Copia elementos desde 3 hasta 5 el cual no incluye en índice 1


// Métodos de Iteración (ES6)
for (const [index, value] of arr.entries()) {
  console.log(`Index: ${index}, Value: ${value}`);
}

for (const key of arr.keys()) {
  console.log(`Key: ${key}`);
}

for (const value of arr.values()) {
  console.log(`Value: ${value}`);
}

arr.flat(); // Aplana arreglos anidados

arr.flatMap((num) => [num * 2, num * 3]); // Aplica función y aplana

arr.at(2); // Obtiene el elemento en el índice 2