const numero1=20;
const numero2='20';
const numero3 = 30;

//Igualdad o Comparación
console.log(`El numero ${numero1} es igual que ${numero2}: ${numero1 == numero2}`);
console.log(`El numero ${numero1} es igual que ${numero3}: ${numero1 == numero3}`);

//Comparacion estricta

console.log(`El numero ${numero1} es igual que ${numero2}: ${numero1 === numero2}`);
console.log(`El numero ${numero1} es igual que ${numero2}: ${numero1 === Number.parseInt(numero2)}`);

//Diferente
const pasword1= 'admin';
const pasword2= 'Admin';

console.log(pasword1 != pasword2);
console.log(numero1 != numero2);
console.log(numero1 !== numero2);
console.log(numero1 !== Number.parseInt(numero2));