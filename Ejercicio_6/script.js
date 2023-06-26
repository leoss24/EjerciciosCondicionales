/* 6. Solicitar al usuario que ingrese tres números y mostrar cuál de los tres es
el número mayor. Considerar el caso en que 2 números sean iguales.*/

let num1 = Number(prompt("Ingresa el primer número"));
let num2 = Number(prompt("Ingresa el segundo número"));
let num3 = Number(prompt("Ingresa el tercer número"));

if (num1 > num2 && num1 > num3) {
    document.write(`El numero mayor es ${num1}`)
}

else if (num2 > num1 && num2 > num3) {
    document.write(`El numero mayor es ${num2}`);
}

else if (num3 > num1 && num3 > num2) {
    document.write(`El numero mayor es ${num3}`);
}

else {
    document.write("Hay dos numeros con el mismo valor");
}
