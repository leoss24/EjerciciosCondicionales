/* 7. Requerir al usuario que ingrese un día de la semana e imprimir un
mensaje si es lunes, otro mensaje diferente si es viernes, otro mensaje
diferente si es sábado o domingo. Si el día ingresado no es ninguno de
esos, imprimir otro mensaje. */

let diaSemana = prompt("Ingresa un dia de la semana");


if (diaSemana == "lunes") {
    document.write("Si se puede imaginar, se puede programar");
}

else if (diaSemana == "viernes") {
    document.write("Si funciona no se toca");
}

else if (diaSemana == "Sábado" || diaSemana == "domingo") {
    document.write("¡Hello world!");
}

else {
    document.write("Eres el CSS  de mi HTML")
}