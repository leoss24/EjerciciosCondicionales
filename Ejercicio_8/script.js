/* 8. Solicitar al usuario una calificación (entre 1 y 10). Luego se debe
comprobar que el número efectivamente esté en ese rango, si no lo está
imprima un mensaje de error. Si lo está, imprima “reprobado” si la
calificación es inferior a 6, “regular” si está entre 6 y 8, “bien” si es 9, y por
último, “excelente” si es 10.*/

let notaFinal = parseInt(prompt("Ingresa tu calificación de 1 a 10"));

if (notaFinal < 1 || notaFinal > 10) {
    document.write("'Error' el dato ingresado no esta en el rango solicitado de 1 a 10")
}
else if (notaFinal < 6) {
    document.write("Reprobado")
}
else if (notaFinal >= 6 && notaFinal <= 8) {
    document.write("Regular")
}
else if (notaFinal === 9) {
    document.write("Bien")
}
else {
     (notaFinal === 10) 
    document.write("Excelente")
}