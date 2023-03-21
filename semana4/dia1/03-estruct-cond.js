// Estructuras Condicionales
const edad = 18;

if (edad >= 18) {
    console.log('Ya es mayorde edad');
} else {
    console.log('Aún es menor de edad');
}


console.log('-----Ejercicio 1 ---');
//Hacer un algoritmo para hacer un descuento del
// 15%  de la compra total si y solo sí si el día de la semana es mates.
// en caso contrario, no aplicar ningun descuento
// OJO: no usar sentencia Else
const dia = 'martes';
const totalComprado = 580;
let resultado = totalComprado;

if (dia === 'martes') {
    resultado = totalComprado - totalComprado * 0.15;
}

console.log('Total a pagar', resultado);

console.log('-----Ejercicio 2---');
/* Modificar el ejercicio anterior, para que el descuento, se realice
sí, es día "martes" y el valor de comppra excede los 1000 soles */

if (dia === 'martes') {
    if (totalComprado > 1000) {
        resultado = totalComprado - totalComprado * 0.15;
    }
    else{
        console.log('No califica por compras menores a 1000 soles');
    }
}else{
    console.log('No califica por ser martes');
}


console.log('Total a pagar', resultado);