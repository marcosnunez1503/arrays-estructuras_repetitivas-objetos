// Ejercicio 1: Creación de un objeto
const auto = {
    marca: "Toyota",
    modelo: "Corolla",
    año: 2020
};
console.log(auto.modelo); 
        
// Ejercicio 2: Modificación de un objeto
let persona = {
    nombre: "Ana",
    edad: 25
};
persona.edad = 26;
persona.profesion = "Ingeniera";
console.log(persona);
        
// Ejercicio 3: Eliminación de una propiedad
const libro = {
    titulo: "Cien años de soledad",
    autor: "Gabriel García Márquez",
    año: 1967
};
const { titulo, autor } = libro;
console.log(titulo);
console.log(autor);  
        
// Ejercicio 4: Iteración sobre un objeto
const alumnos = [
    { nombre: "Lucas", nota: 8 },
    { nombre: "Sofía", nota: 9 },
    { nombre: "Martín", nota: 7 }
];
let mejor = alumnos[0];
for (let alumno of alumnos) {
    if (alumno.nota > mejor.nota) {
        mejor = alumno;
    }
}
console.log(mejor.nombre); 