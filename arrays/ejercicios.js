console.log("Ejercicio 1");
let frutas = ["manzana", "banana", "pera"];
frutas[1] = "naranja";
console.log(frutas);

console.log("Ejercicio 2");
let numeros1 = [1, 2, 3];
numeros1.push(4);
numeros1.pop();
console.log(numeros1);

console.log("Ejercicio 3");
let animales1 = ["perro", "gato"];
let animales2 = ["loro", "pez"];
let animales = animales1.concat(animales2);
console.log(animales);

console.log("Ejercicio 4");
let numeros2 = [1, 2, 3, 4, 5];
numeros2.reverse();
console.log(numeros2);

console.log("Ejercicio 5");
let colores = ["rojo", "verde", "azul", "amarillo", "violeta"];
let seleccion = colores.slice(1, 3);
console.log(seleccion);

console.log("Ejercicio 6");
let edades = [10, 15, 20, 25];
let mayores = edades.map(e => e >= 18);
console.log(mayores);

console.log("Ejercicio 7");
let numeros3 = [2, 4, 6, 8];
numeros3.forEach(function(num) {
    console.log(num * 2);
});