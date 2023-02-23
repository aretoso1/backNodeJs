'use strict'

var params= process.argv.slice(3);
console.log(params);

var numero1= parseFloat(params[0]);
var numero2= parseFloat(params[1]);

console.log(numero1);
console.log(numero2);

var plantilla= `
la suma es: ${numero1+numero2}
la resta es: ${numero1-numero2}
la multiplicación es: ${numero1*numero2}
la división es: ${numero1/numero2}

`;
console.log('Hola mundo');
console.log(plantilla)