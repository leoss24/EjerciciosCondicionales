/* 5. Solicitar al usuario que ingrese dos números y mostrar cuál de los dos es
menor. No considerar el caso en que ambos números son iguales.*/

let número1 = parseInt(prompt("Ingresa un numero"));
let número2 = parseInt(prompt("Ingresa otro numero"));

if (número1 < número2) {
    document.write(`El numero menor es ${número1}`);
}

else if (número1 > número2) {
    document.write(`El numero menor es ${número2}`);
}