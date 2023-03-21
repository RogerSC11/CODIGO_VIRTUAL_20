//TIPO DE DATOS
//string o cadenas de texto
const miNombre = 'Jorgito';
//nunero se escriben sin comillas
const edad = 31;
//booleanos, solo acepta 2 valores true o false
const casado = false;

// operaciones algebraicas
// + ---> suma
// - ---> resta 
// / ---> división
// % ---> módulo o residuo
// a++ => incremento de una unidad a la variable a
// a-- => increment de una unidad a la variable a
// a+=1  => incrementa una unidad a la variable a
// a=a+1 => incrementa una unidad a la variable a
const modulo = 50 % 20;
console.log('Modulo es ', modulo);
// Operadores lógicos o de comparación
/*
a == b ----> compara dos elementos de acuerdo a su valor, retora true o false dependiendo del caso.
a === b --->  compara dos elementos de acuerdo a su valor y su tipo de datos, es decir ambos puntos deben se 
igulaes para obtener un resultado true.
*/
const a = 5;
const b = '5';
const rpta = a == b;
console.log('Respuesta ', rpta);

/*--------- */
const x = 90;
const y = "90";
const rpta1 = x === y;
console.log('rpta1 ', rpta1);

/* <,>,<=,>=, !=, !==*/
/* 
 a != b ---> compara si a es diferente de b en valor independientemenete del tipo de dato
 a !== b ----> ompara si a es diferente de b en valor y tipo de dato.
 */
const rpta2 = a < x;
console.log('rpta2 ', rpta2);

console.log(5 !== '5');
console.log(5 != '5');
/*
&&, ||

a && b  --- > a y b deben ser verdaderos para obtener un resultado verdadero, en cualquier otro caso la 
respueta será falsa

a || b  --->evalua que almenos uno 1 tenga un valor verdadero para que respuesta sea verdadera


*/

/*
!a ----> niega oinvierte el resultado de a, si a es true el resultado es false y viceversa

 */
console.log(1 == 1 && 2 === 2);
console.log(1 != 1 || 2 != 2);

let c1 = parseInt(prompt('Lee nota c1: '));
let c2 = parseInt(prompt('Lee nota c2: '));
let c3 = parseInt(prompt('Lee nota c3: '));
let c4 = parseInt(prompt('Lee nota c4: '));

let S = c1 + c2 + c3 + c4;
let P = S / 4;
    console.log('S ', S);
console.log('P ', P);