/*4. Solicitar al usuario un número de cliente. Si el número es el 1000, imprimir
"Ganaste un premio", en caso contrario mostrar el número y el mensaje
“Lo sentimos, sigue participando”.*/


let numero = prompt("Número de cliente");


if (numero == 1000) {
    document.write('"Ganaste un premio"')
} 
else {
    document.write(numero + ' " Lo sentimos, sigue participando".');
}
 
